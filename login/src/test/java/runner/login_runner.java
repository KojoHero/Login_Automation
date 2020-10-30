package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions (
		//features = {"F:\\Login\\login\\src\\test\\java\\Login\\login\\login.feature"},
		features = {"F:\\Login\\login\\src\\test\\java\\Login\\login\\1_COMMUNITY-291.feature"},
				
		glue = {"steps"},
		monochrome = true,
		tags = {},
		plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
		)

public class login_runner extends AbstractTestNGCucumberTests {

}