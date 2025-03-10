export default {
  multiqcSidebar: [
    [
      "index",
      {
        "type": "category",
        "label": "Getting started",
        "collapsed": true,
        "items": [
          "getting_started/quick_start",
          "getting_started/installation",
          "getting_started/running_multiqc",
          "getting_started/config"
        ]
      },
      {
        "type": "category",
        "label": "Reports",
        "collapsed": true,
        "items": [
          "reports/reports",
          "reports/customisation"
        ]
      },
      "custom_content/index",
      {
        "type": "category",
        "label": "Usage",
        "collapsed": true,
        "items": [
          "usage/downstream",
          "usage/pipelines",
          "usage/scripts",
          "usage/troubleshooting"
        ]
      },
      {
        "type": "category",
        "label": "Development",
        "collapsed": true,
        "items": [
          "development/index",
          "development/modules",
          "development/plots",
          "development/plugins",
          "development/templates",
          "development/compatibility",
          "development/contributing"
        ]
      },
      {
        "type": "category",
        "label": "Supported tools",
        "collapsed": true,
        "items": [
          {
            type: 'autogenerated',
            dirName: 'modules'
          }
        ]
      }
    ]
  ]
};
