package com.group11.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class AppConfig {

	@Configuration
	public class SecurityConfig {

	    @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	        http
	            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	            .and()
	            .authorizeRequests(authorize -> authorize
	                // Allow access to the Swagger API documentation
	                .requestMatchers("/context-path/v3/api-docs").permitAll()
	                // Secure other API endpoints under "/api/**" and require authentication
	                .requestMatchers("/api/**").authenticated()
	                // Allow all other requests
	                .anyRequest().permitAll()
	            )
	            .addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)
	            .csrf().disable()
	            .cors()
	                .configurationSource(corsConfigurationSource())
	            .and()
	            .httpBasic()
	            .and()
	            .formLogin();
	        
	        return http.build();
	    }

	    @Bean
	    public CorsConfigurationSource corsConfigurationSource() {
	        CorsConfiguration corsConfig = new CorsConfiguration();
	        corsConfig.setAllowedOrigins(Arrays.asList(
	            "http://localhost:3000",
	            "http://localhost:4000",
	            "http://localhost:4200",
	            "http://localhost:5454/"
	        ));
	        corsConfig.setAllowedMethods(Arrays.asList(
	            HttpMethod.GET.name(),
	            HttpMethod.POST.name(),
	            HttpMethod.PUT.name(),
	            HttpMethod.DELETE.name()
	        ));
	        corsConfig.setAllowCredentials(true);
	        corsConfig.setAllowedHeaders(Arrays.asList("*"));
	        corsConfig.setExposedHeaders(Arrays.asList("Authorization"));
	        corsConfig.setMaxAge(3600L);

	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", corsConfig);

	        return source;
	    }
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
