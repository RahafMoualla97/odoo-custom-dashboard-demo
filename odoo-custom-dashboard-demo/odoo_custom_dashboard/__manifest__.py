# -*- coding: utf-8 -*-
{
    'name' : 'Owl Dashboards',
    'version' : '1.0',
    'summary': 'OWL Dashboards',
    'sequence': -1,
    'description': """OWL Dashboards Custom Dashboard""",
    'category': 'OWL',
    'depends' : ['base', 'web', 'sale', 'board', 'sale_management'],
    'data': [
        'views/sales_dashboard.xml',
    ],
    'demo': [
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_backend': [
            'odoo_custom_dashboard/static/src/components/**/*.js',
            'odoo_custom_dashboard/static/src/components/**/*.xml',
            'odoo_custom_dashboard/static/src/components/**/*.scss',
        ],
    },
}
