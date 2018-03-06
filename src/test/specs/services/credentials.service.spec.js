describe("inspinia", function() {
  beforeEach(module("inspinia"));
  console.log(module("inspinia"));
  var toState, //variable - site pages for authorized user (= {auth:true}) or not authorized user (= {auth:false})
    $localStorage, //  service $sessionStorage where storage with auth session
    credentials; // project service

  beforeEach(
    inject(function(_$localStorage_, _credentials_) {
      $localStorage = _$localStorage_;
      credentials = _credentials_;
    })
  );

  afterEach(function() {
    delete $localStorage["app.session"];
  });

  describe("credentials.service", function() {
    it("site pages for authorized user + authorized user", function() {
        toState = { auth: true };
        $localStorage["app.session"] = {};
        expect(credentials.authorized(toState)).toBe(false);
    });

    it(" pages for not authorized user + not authorized user", function() {
      toState = { auth: false };
      expect(credentials.authorized(toState)).toBe(true);
    });

    it("site pages for authorized user + not authorized user", function() {
      toState = { auth: false };
      $localStorage["app.session"] = {};
        console.log($localStorage, credentials, toState);
      expect(credentials.authorized(toState)).toBe(true);
    });

    it("pages for not authorized user + authorized user", function() {
      toState = { auth: true };
      expect(credentials.authorized(toState)).toBe(false);
    });
  });
});
