var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <section className="TopSites">
        <div className="TopSitesHeading">
          <div className="TopSitesHeadingTitle" onDoubleClick={this.props.enableDemo}>
            Top {this.props.items.length}
          </div>
        </div>
        <div className="TopSitesBody">
          {this.props.items.map(function (item) {
            return <TopSiteItem key={item.url} title={item.title} url={item.url}/>;
          })}
        </div>
      </section>
    );
  }
});

var TopSiteItem = React.createClass({
  render: function () {
    var style = {
      backgroundImage: "url('chrome://favicon/" + this.props.url + "')"
    };
    return (
      <a href={this.props.url}>
        <div className="TopSitesItem">
          <div className="TopSitesItemBody" style={style}></div>
          <div className="TopSitesItemTip">{this.props.title}</div>
        </div>
      </a>
    );
  }
});