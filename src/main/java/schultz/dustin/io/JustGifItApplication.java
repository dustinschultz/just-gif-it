package schultz.dustin.io;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.annotation.PostConstruct;
import java.io.File;

@SpringBootApplication
public class JustGifItApplication {

    @Value("${multipart.location}/gif/")
    private String gifLocation;

    public static void main(String[] args) {
        SpringApplication.run(JustGifItApplication.class, args);
    }

    @PostConstruct
    private void init() {
        File gifFolder = new File(gifLocation);
        if (!gifFolder.exists()) {
            gifFolder.mkdir();
        }
    }

    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addResourceHandlers(ResourceHandlerRegistry registry) {
                registry.addResourceHandler("/gif/**")
                        .addResourceLocations("file:" + gifLocation);
                super.addResourceHandlers(registry);
            }
        };
    }
}
