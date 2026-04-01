import { registry } from "@web/core/registry"
import { loadJS } from "@web/core/assets"
const { Component, onWillStart, useRef, onMounted, onWillUnmount } = owl
import { useService } from "@web/core/utils/hooks"
import { useEffect } from "@odoo/owl";


export class ChartRenderer extends Component {
    setup() {
        this.chartRef = useRef("chart")
        this.actionService = useService("action")

        onWillStart(async () => {
            //await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js")
            await loadJS("/web/static/lib/Chart/Chart.js")
        })

        onMounted(() => this.renderChart())
        useEffect(() => {
            this.renderChart()
        }, () => [this.props.config])

        onWillUnmount(() => {
            if (this.chart) {
                this.chart.destroy()
            }
        })
    }

    renderChart() {

        if (this.chart) {
            this.chart.destroy()
        }

        this.chart = new Chart(this.chartRef.el,
            {
                type: this.props.type,
                data: this.props.config.data,
                options: {
                    onClick: (e) => {
                        const [activeElement] = this.chart.getElementAtEvent(e);
                        if (!activeElement) {
                            return;
                        }
                        const { _datasetIndex, _index } = activeElement;
                        //const active = e.chart.getActiveElements()

                        //if (active.length > 0) {
                            //const label = e.chart.data.labels[active[0].index]
                            //const dataset = e.chart.data.datasets[active[0].datasetIndex].label
                        const label = this.chart.data.labels[_index]
                        const dataset = this.chart.data.datasets[_datasetIndex].label
                            const { label_field, domain } = this.props.config
                            let new_domain = domain ? domain : []

                            if (label_field) {
                                if (label_field.includes('date')) {
                                    const timeStamp = Date.parse(label)
                                    const selected_month = moment(timeStamp)
                                    const month_start = selected_month.format('L')
                                    const month_end = selected_month.endOf('month').format('L')
                                    new_domain.push(['date', '>=', month_start], ['date', '<=', month_end])
                                } else {
                                    new_domain.push([label_field, '=', label])
                                }
                            //}

                            if (dataset == 'Quotations') {
                                new_domain.push(['state', 'in', ['draft', 'sent']])
                            }

                            if (dataset == 'Orders') {
                                new_domain.push(['state', 'in', ['sale', 'done']])
                            }

                            this.actionService.doAction({
                                type: "ir.actions.act_window",
                                name: this.props.title,
                                res_model: "sale.report",
                                domain: new_domain,
                                views: [
                                    [false, "list"],
                                    [false, "form"],
                                ]
                            })
                        }
                    },

                },

            }
        );
    }
}

ChartRenderer.template = "owl.ChartRenderer"
