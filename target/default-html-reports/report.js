$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Default",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1007"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title"
      ]
    },
    {
      "cells": [
        "user1",
        "UserUser123",
        "Quick Launchpad"
      ]
    },
    {
      "cells": [
        "salesmanager105",
        "UserUser123",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "UserUser123",
        "Dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1007"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using \"user1\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserLoginUsingAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see \"Quick Launchpad\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_should_see(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Quick Launchpa]d\u003e but was:\u003c[Dashboar]d\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.vytrack.step_definitions.LoginStepDefinition.the_user_should_see(LoginStepDefinition.java:32)\r\n\tat ✽.The user should see \"Quick Launchpad\"(file:///C:/Users/hayda/Desktop/VytrackAutomation/src/test/resources/features/login.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1007"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using \"salesmanager105\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserLoginUsingAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1007"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using \"storemanager85\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserLoginUsingAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with invaid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1008"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user login using invalid \"\u003cusername\u003e\" or \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see error \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ]
    },
    {
      "cells": [
        "wrongusername",
        "UserUser123",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "salesmanager105",
        "wrongpassword",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "storemanager85",
        "wrongpassword",
        "Invalid user name or password."
      ]
    },
    {
      "cells": [
        "user1",
        "wrongpassword",
        "Invalid user name or password."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with invaid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1008"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using invalid \"wrongusername\" or \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_invalid_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see error \"Invalid user name or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invaid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1008"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using invalid \"salesmanager105\" or \"wrongpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_invalid_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see error \"Invalid user name or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invaid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1008"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using invalid \"storemanager85\" or \"wrongpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_invalid_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see error \"Invalid user name or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invaid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1008"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using invalid \"user1\" or \"wrongpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_invalid_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see error \"Invalid user name or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1009"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user login using empty \"\u003cusername\u003e\" or \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see inputError\"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ]
    },
    {
      "cells": [
        "user1",
        "",
        "Please fill out this field"
      ]
    },
    {
      "cells": [
        "salesmanager105",
        "",
        "Please fill out this field"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "",
        "Please fill out this field"
      ]
    },
    {
      "cells": [
        "",
        "UserUser123",
        "Please fill out this field"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1009"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using empty \"user1\" or \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_empty_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see inputError\"Please fill out this field\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeInputError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1009"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using empty \"salesmanager105\" or \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_empty_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see inputError\"Please fill out this field\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeInputError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1009"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using empty \"storemanager85\" or \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_empty_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see inputError\"Please fill out this field\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeInputError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1009"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using empty \"\" or \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_empty_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see inputError\"Please fill out this field\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeInputError(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Forgot password page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1010"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on the Forgot your password link",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_clicks_on_the_Forgot_your_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to the Forgot Password page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_navigates_to_the_Forgot_Password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Remember Me Checkbox",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1011"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user can see Remember Me link exists and is clickable",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserCanSeeRememberMeLinkExistsAndIsClickable()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying the Enter key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1012"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with keyboard enter key",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title"
      ]
    },
    {
      "cells": [
        "user1",
        "UserUser123",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "salesmanager105",
        "UserUser123",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "UserUser123",
        "Dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying the Enter key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1012"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using \"user1\" and \"UserUser123\" with keyboard enter key",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_and_with_keyboard_enter_key(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the Enter key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1012"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using \"salesmanager105\" and \"UserUser123\" with keyboard enter key",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_and_with_keyboard_enter_key(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the Enter key",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1012"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using \"storemanager85\" and \"UserUser123\" with keyboard enter key",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_login_using_and_with_keyboard_enter_key(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the bullet signs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1013"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters password",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_enters_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the password in bullet signs by default",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_should_see_the_password_in_bullet_signs_by_default()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying the Profile Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1014"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see user\"\u003cprofileName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "profileName"
      ]
    },
    {
      "cells": [
        "user1",
        "UserUser123",
        "John Doe"
      ]
    },
    {
      "cells": [
        "salesmanager105",
        "UserUser123",
        "John Doe"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "UserUser123",
        "John Doe"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying the Profile Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1014"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using \"user1\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserLoginUsingAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see user\"John Doe\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the Profile Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1014"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using \"salesmanager105\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserLoginUsingAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see user\"John Doe\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the Profile Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FLTAPS-1031"
    },
    {
      "name": "@FLTAPS-1014"
    },
    {
      "name": "@FLTAPS-1006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user login using \"storemanager85\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserLoginUsingAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see user\"John Doe\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinition.theUserShouldSeeUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});