$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Login/login/src/test/java/Login/login/1_COMMUNITY-291.feature");
formatter.feature({
  "line": 2,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"\u003cnotice\u003e\" depending on the credentials used",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "notice"
      ],
      "line": 13,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;1"
    },
    {
      "cells": [
        "testing.amalitechgmail.com",
        "12345678!Aa",
        "Please check your credentials and try again."
      ],
      "line": 14,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;2"
    },
    {
      "cells": [
        "4syllable@gmail.com",
        "12345678!Aa",
        "Please check your credentials and try again."
      ],
      "line": 15,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;3"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "12354678!Aa",
        "Please check your credentials and try again."
      ],
      "line": 16,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;4"
    },
    {
      "cells": [
        "testing.amalitech.gmail.com",
        "12345678!Aa",
        "Please check your credentials and try again."
      ],
      "line": 17,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;5"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "12345678",
        "Please check your credentials and try again."
      ],
      "line": 18,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;6"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "",
        "An error occured."
      ],
      "line": 19,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;7"
    },
    {
      "cells": [
        "",
        "12345678!Aa",
        "An error occured."
      ],
      "line": 20,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;8"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "aaaaaaaaaA",
        "Please check your credentials and try again."
      ],
      "line": 21,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;9"
    },
    {
      "cells": [
        "testing.amalitech@gmail.com",
        "1234567890",
        "Please check your credentials and try again."
      ],
      "line": 22,
      "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5942165200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"testing.amalitechgmail.com\" and \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"Please check your credentials and try again.\" depending on the credentials used",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_visits_the_community_platform_login_page()"
});
formatter.result({
  "duration": 2889569900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitechgmail.com",
      "offset": 17
    },
    {
      "val": "12345678!Aa",
      "offset": 50
    }
  ],
  "location": "login.user_inputs_his_and(String,String)"
});
formatter.result({
  "duration": 216212800,
  "status": "passed"
});
formatter.match({
  "location": "login.user_taps_on_the_login_button()"
});
formatter.result({
  "duration": 45938000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please check your credentials and try again.",
      "offset": 51
    }
  ],
  "location": "login.user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8030850500,
  "status": "passed"
});
formatter.after({
  "duration": 614486900,
  "status": "passed"
});
formatter.before({
  "duration": 5187335100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"4syllable@gmail.com\" and \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"Please check your credentials and try again.\" depending on the credentials used",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_visits_the_community_platform_login_page()"
});
formatter.result({
  "duration": 2104081300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4syllable@gmail.com",
      "offset": 17
    },
    {
      "val": "12345678!Aa",
      "offset": 43
    }
  ],
  "location": "login.user_inputs_his_and(String,String)"
});
formatter.result({
  "duration": 206567200,
  "status": "passed"
});
formatter.match({
  "location": "login.user_taps_on_the_login_button()"
});
formatter.result({
  "duration": 47849500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please check your credentials and try again.",
      "offset": 51
    }
  ],
  "location": "login.user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8030918700,
  "status": "passed"
});
formatter.after({
  "duration": 624536900,
  "status": "passed"
});
formatter.before({
  "duration": 5291813000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"testing.amalitech@gmail.com\" and \"12354678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"Please check your credentials and try again.\" depending on the credentials used",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_visits_the_community_platform_login_page()"
});
formatter.result({
  "duration": 2807539400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 17
    },
    {
      "val": "12354678!Aa",
      "offset": 51
    }
  ],
  "location": "login.user_inputs_his_and(String,String)"
});
formatter.result({
  "duration": 202932700,
  "status": "passed"
});
formatter.match({
  "location": "login.user_taps_on_the_login_button()"
});
formatter.result({
  "duration": 47516900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please check your credentials and try again.",
      "offset": 51
    }
  ],
  "location": "login.user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8025016700,
  "status": "passed"
});
formatter.after({
  "duration": 640260900,
  "status": "passed"
});
formatter.before({
  "duration": 5234034500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"testing.amalitech.gmail.com\" and \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"Please check your credentials and try again.\" depending on the credentials used",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_visits_the_community_platform_login_page()"
});
formatter.result({
  "duration": 2736322700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech.gmail.com",
      "offset": 17
    },
    {
      "val": "12345678!Aa",
      "offset": 51
    }
  ],
  "location": "login.user_inputs_his_and(String,String)"
});
formatter.result({
  "duration": 203065800,
  "status": "passed"
});
formatter.match({
  "location": "login.user_taps_on_the_login_button()"
});
formatter.result({
  "duration": 41329300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please check your credentials and try again.",
      "offset": 51
    }
  ],
  "location": "login.user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8032641200,
  "status": "passed"
});
formatter.after({
  "duration": 617770600,
  "status": "passed"
});
formatter.before({
  "duration": 5235696100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"testing.amalitech@gmail.com\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"Please check your credentials and try again.\" depending on the credentials used",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_visits_the_community_platform_login_page()"
});
formatter.result({
  "duration": 3405392800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 17
    },
    {
      "val": "12345678",
      "offset": 51
    }
  ],
  "location": "login.user_inputs_his_and(String,String)"
});
formatter.result({
  "duration": 198059600,
  "status": "passed"
});
formatter.match({
  "location": "login.user_taps_on_the_login_button()"
});
formatter.result({
  "duration": 47789900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please check your credentials and try again.",
      "offset": 51
    }
  ],
  "location": "login.user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8025668200,
  "status": "passed"
});
formatter.after({
  "duration": 633397900,
  "status": "passed"
});
formatter.before({
  "duration": 5194589800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"testing.amalitech@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"An error occured.\" depending on the credentials used",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_visits_the_community_platform_login_page()"
});
formatter.result({
  "duration": 2721701400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 17
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "login.user_inputs_his_and(String,String)"
});
formatter.result({
  "duration": 174879900,
  "status": "passed"
});
formatter.match({
  "location": "login.user_taps_on_the_login_button()"
});
formatter.result({
  "duration": 47608000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An error occured.",
      "offset": 51
    }
  ],
  "location": "login.user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8036727400,
  "status": "passed"
});
formatter.after({
  "duration": 621183800,
  "status": "passed"
});
formatter.before({
  "duration": 5252004900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"\" and \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"An error occured.\" depending on the credentials used",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_visits_the_community_platform_login_page()"
});
formatter.result({
  "duration": 2576280900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    },
    {
      "val": "12345678!Aa",
      "offset": 24
    }
  ],
  "location": "login.user_inputs_his_and(String,String)"
});
formatter.result({
  "duration": 134710900,
  "status": "passed"
});
formatter.match({
  "location": "login.user_taps_on_the_login_button()"
});
formatter.result({
  "duration": 50602600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An error occured.",
      "offset": 51
    }
  ],
  "location": "login.user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8021307000,
  "status": "passed"
});
formatter.after({
  "duration": 614676300,
  "status": "passed"
});
formatter.before({
  "duration": 5193564600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"testing.amalitech@gmail.com\" and \"aaaaaaaaaA\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"Please check your credentials and try again.\" depending on the credentials used",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_visits_the_community_platform_login_page()"
});
formatter.result({
  "duration": 2078855100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 17
    },
    {
      "val": "aaaaaaaaaA",
      "offset": 51
    }
  ],
  "location": "login.user_inputs_his_and(String,String)"
});
formatter.result({
  "duration": 200799200,
  "status": "passed"
});
formatter.match({
  "location": "login.user_taps_on_the_login_button()"
});
formatter.result({
  "duration": 36422200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please check your credentials and try again.",
      "offset": 51
    }
  ],
  "location": "login.user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8023880700,
  "status": "passed"
});
formatter.after({
  "duration": 613874000,
  "status": "passed"
});
formatter.before({
  "duration": 5199654000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify Login with valid and invalid credentials",
  "description": "",
  "id": "verify-login-with-valid-and-invalid-credentials;verify-login-with-valid-and-invalid-credentials;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-190"
    },
    {
      "line": 4,
      "name": "@TEST_COMMUNITY-291"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User visits the community platform login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inputs his \"testing.amalitech@gmail.com\" and \"1234567890\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User taps on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be informed with a success or failure \"Please check your credentials and try again.\" depending on the credentials used",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_visits_the_community_platform_login_page()"
});
formatter.result({
  "duration": 2112867800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing.amalitech@gmail.com",
      "offset": 17
    },
    {
      "val": "1234567890",
      "offset": 51
    }
  ],
  "location": "login.user_inputs_his_and(String,String)"
});
formatter.result({
  "duration": 196032500,
  "status": "passed"
});
formatter.match({
  "location": "login.user_taps_on_the_login_button()"
});
formatter.result({
  "duration": 45789200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please check your credentials and try again.",
      "offset": 51
    }
  ],
  "location": "login.user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String)"
});
formatter.result({
  "duration": 8021574100,
  "status": "passed"
});
formatter.after({
  "duration": 612934000,
  "status": "passed"
});
});