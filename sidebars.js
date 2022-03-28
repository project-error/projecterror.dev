module.exports = {
  docs: {
    'New Phone Who Dis': [
      {
        type: 'category',
        label: 'Getting Started',
        items: [
          'npwd/start/introduction',
          'npwd/start/installation',
          'npwd/start/config_reference',
        ],
      },
      {
        type: 'category',
        label: 'Configuration',
        items: ['npwd/configuration/main', 'npwd/configuration/defaults'],
      },
      {
        type: 'category',
        label: 'Framework Integration',
        items: ['npwd/framework/esx', 'npwd/framework/qb-core'],
      },
      {
        type: 'category',
        label: 'API Reference',
        items: [
          'npwd/api/client-exports',
          'npwd/api/server-exports',
          'npwd/api/npwd-events',
        ],
      },
      {
        type: 'category',
        label: 'Development',
        items: [
          'npwd/dev/dev_bootstrap',
          'npwd/dev/framework_integration',
          'npwd/dev/setup',
          'npwd/dev/disable_apps',
          'npwd/dev/basics',
        ],
      },
      'npwd/credits',
      'npwd/faq',
      'npwd/roadmap',
    ],
    'PE-Financing': [
      'pefcl/installation',
      'pefcl/configuration',
      {
        type: 'category',
        label: 'Developers',
        items: [
          'pefcl/developers/introduction',
          {
            type: 'category',
            label: 'API',
            items: [
              'pefcl/developers/api/server',
              'pefcl/developers/api/client',
            ],
          },
        ],
      },
    ],
  },
};
