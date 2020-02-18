const Template = { template: '<div>Template</div>' }

const widgetsRoutes = [
    {
        path: '/quotation-slip/:id',
        name: 'quotation_slip',
        component: Template,
    },
    {
        path: '/broker-slip/:id',
        name: 'broker_slip',
        component: Template,
    }
]


export default widgetsRoutes