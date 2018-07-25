package com.adobe.theforce;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
public class AppConfig {
	
	@Bean
	public DataSource getDataSource (){ //pool of database connection unlike the jdbc
		DriverManagerDataSource ds = new DriverManagerDataSource();
		ds.setDriverClassName("com.mysql.jdbc.Driver");
		ds.setUsername("root");
		ds.setPassword("kshkumar");
		ds.setUrl("jdbc:mysql://localhost:3306/adobe_trg_db?createDatabaseIfNotExist=true");
		return  ds;
	}

	@Bean
	public LocalContainerEntityManagerFactoryBean getEntityManagerFactory(){
		LocalContainerEntityManagerFactoryBean emf = new LocalContainerEntityManagerFactoryBean();
		emf.setDataSource(getDataSource());
		emf.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
		emf.setPackagesToScan("com.adobe.theforce.entity");
		Properties props = new Properties();
		props.setProperty("hibernate.hbm2ddl.auto", "update");
		props.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
		emf.setJpaProperties(props);
		return emf;
	}
	
	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory emf){
		return new JpaTransactionManager(emf);
	}
}
