var search, __iced_k, __iced_k_noop;

__iced_k = __iced_k_noop = function() {};

search = function(keyword, cb) {
  var host, json, url, ___iced_passed_deferral, __iced_deferrals, __iced_k;
  __iced_k = __iced_k_noop;
  ___iced_passed_deferral = iced.findDeferral(arguments);
  host = "http://search.twitter.com/";
  url = "" + host + "/search.json?q=" + keyword + "&callback=?";
  (function(_this) {
    return (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral
      });
      $.getJSON(url, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return json = arguments[0];
          };
        })(),
        lineno: 3
      }));
      __iced_deferrals._fulfill();
    });
  })(this)((function(_this) {
    return function() {
      return cb(json.results);
    };
  })(this));
};
