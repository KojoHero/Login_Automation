package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login {
	

	WebDriver driver;
	  
	@Before()
	public void setup() {  
		System.setProperty("webdriver.chrome.driver",
				"F:\\Login\\login\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);

	}
	
	@After()
	public void end() {
	driver.manage().deleteAllCookies();
	driver.quit();
	}

	
	@Given("^User visits the community platform login page$")
	public void user_visits_the_community_platform_login_page() throws Throwable {
		 driver.get("http://20.52.44.20/auth/login");
	}

	@When("^User inputs his \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_inputs_his_and(String email_phone, String password) throws Throwable {
		driver.findElement(By.id("InputEmail")).sendKeys(email_phone);
		driver.findElement(By.id("InputPassword1")).sendKeys(password);
	}

	@When("^User taps on the login button$")
	public void user_taps_on_the_login_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/form/div[3]/button")).click();
	}

	@Then("^user should be informed with a success or failure \"([^\"]*)\" depending on the credentials used$")
	public void user_should_be_informed_with_a_success_or_failure_depending_on_the_credentials_used(String notice) throws Throwable {
		Thread.sleep(8000);
		//driver.wait(500);
	  	String url =driver.findElement(By.xpath("//*[@id=\"myModal\"]/div/div/p")).getText();                                         
	  	Assert.assertEquals(url,notice);        
	
	}
	
	
}
