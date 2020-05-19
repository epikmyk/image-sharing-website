-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: hashtagimgdb
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(4096) NOT NULL,
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  `fk_postid` int NOT NULL,
  `fk_userid` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `comments to posts_idx` (`fk_postid`),
  KEY `comments to users_idx` (`fk_userid`),
  CONSTRAINT `comments to posts` FOREIGN KEY (`fk_postid`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments to users` FOREIGN KEY (`fk_userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (16,'my name jeffff',0,'2020-05-17 11:20:53',20,56),(17,'my name jeffff',0,'2020-05-17 11:22:53',20,56),(18,'shippopi',0,'2020-05-17 11:23:40',20,56),(33,'big booty WOWWWWW',0,'2020-05-17 13:51:47',22,56),(35,'i love bulgogi too',0,'2020-05-17 15:42:57',25,56),(37,'wowwwww',0,'2020-05-17 15:44:33',25,56),(39,'thats shaq',0,'2020-05-17 16:08:34',24,56),(40,'im bob',0,'2020-05-17 16:12:36',24,56),(41,'hi shaq',0,'2020-05-17 16:12:54',24,56),(42,'woww thats crazy',0,'2020-05-17 16:13:23',20,56),(43,'sup foool',0,'2020-05-17 16:13:29',20,56),(44,'Dang. I wish I was bald like shaq because his head looks really shiny. I also like to drink water because its good. Im just writing random text to test this out. dont minde me.',0,'2020-05-17 16:14:33',24,56),(46,'AHHHHHHWAHHHHHHH',0,'2020-05-17 16:58:55',20,58),(47,'oh no',0,'2020-05-17 17:12:33',20,58),(48,'i wanna playyyyy',0,'2020-05-17 17:30:29',21,56),(49,'yuuummmmmm',0,'2020-05-17 18:18:14',18,56),(52,'thats a big butt',0,'2020-05-17 18:49:47',22,56),(53,'bulgogi is good',0,'2020-05-17 18:50:12',25,58),(54,'whaaaaaa',0,'2020-05-17 19:30:59',24,56),(55,'my name phil',0,'2020-05-17 22:13:20',23,68),(56,'i like chicken',0,'2020-05-17 22:17:50',23,68),(57,'WOW',0,'2020-05-18 00:01:22',22,56),(58,'Hello. My name is phil and I like chicken.',0,'2020-05-18 00:23:22',18,68),(59,'I like dinosaurs.',0,'2020-05-18 00:41:12',23,56),(60,'I like big butts and i cannot lie',0,'2020-05-18 17:10:01',24,56),(61,'I want one too!',0,'2020-05-18 18:33:40',28,69),(62,'I like pandas.',0,'2020-05-18 19:53:22',17,75),(63,'I like big butts.',0,'2020-05-18 21:05:13',27,56),(64,'I like this game.',0,'2020-05-18 21:05:27',21,56),(65,'Shaq is bald.',0,'2020-05-18 21:07:37',22,56),(66,'I like pandas',0,'2020-05-18 21:08:01',17,69),(67,'i like burgers',0,'2020-05-18 21:08:38',18,56),(68,'shaq is bald',0,'2020-05-18 21:09:02',15,69),(69,'Is that Illumnos??????',0,'2020-05-18 21:22:09',29,56),(70,'I am groot.',0,'2020-05-18 21:40:28',29,78),(71,'I love ice cream',0,'2020-05-18 23:45:03',39,56),(72,'i am groot',0,'2020-05-18 23:52:06',15,78),(73,'i am groot',0,'2020-05-18 23:52:20',17,78),(74,'i am groot',0,'2020-05-18 23:52:27',18,78),(75,'i am groot\r\n',0,'2020-05-18 23:52:42',16,78),(76,'i am groot',0,'2020-05-18 23:54:06',20,78),(77,'i am groot',0,'2020-05-18 23:54:15',21,78),(78,'i am groot',0,'2020-05-18 23:54:23',22,78),(79,'i am groot',0,'2020-05-18 23:54:29',23,78),(80,'i am groot',0,'2020-05-18 23:54:42',24,78),(81,'i am groot',0,'2020-05-18 23:54:50',25,78),(82,'i am groot',0,'2020-05-18 23:55:04',19,78),(83,'i am groot',0,'2020-05-18 23:55:15',31,78),(84,'i am groot',0,'2020-05-18 23:55:22',32,78),(85,'i am groot',0,'2020-05-18 23:55:28',33,78),(86,'i am groot',0,'2020-05-18 23:55:34',35,78),(87,'i am groot',0,'2020-05-18 23:55:41',36,78),(88,'i am groot',0,'2020-05-18 23:55:47',37,78),(89,'i am groot',0,'2020-05-18 23:55:53',38,78),(90,'i am groot',0,'2020-05-18 23:56:01',39,78),(91,'i am groot',0,'2020-05-18 23:56:06',40,78),(92,'i am groot',0,'2020-05-18 23:56:12',41,78),(93,'whyyyyyyyyyyy',0,'2020-05-18 23:57:05',37,56),(94,'who are you',0,'2020-05-18 23:57:14',36,56),(95,'wow',0,'2020-05-18 23:57:29',40,56),(96,'me too',0,'2020-05-18 23:57:39',32,56),(97,'pandasssss',0,'2020-05-18 23:57:54',31,56),(98,'nom nom nom',0,'2020-05-18 23:58:20',26,56);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` varchar(4096) NOT NULL,
  `photopath` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  `fk_userid` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `posts to users_idx` (`fk_userid`),
  CONSTRAINT `posts to users` FOREIGN KEY (`fk_userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (15,'shaq','shaqface','public\\images\\uploads\\a37a0a3a180aec64317fe67d6f851d1f766ae2ebdd9d.jpeg','public/images/uploads/thumbnail-a37a0a3a180aec64317fe67d6f851d1f766ae2ebdd9d.jpeg',0,'2020-05-13 21:57:15',56),(16,'shaq','123','public\\images\\uploads\\a15d49c08f8e5d9e0aeab7e0e1c4091c98bcb97a867b.jpeg','public/images/uploads/thumbnail-a15d49c08f8e5d9e0aeab7e0e1c4091c98bcb97a867b.jpeg',0,'2020-05-13 22:02:31',56),(17,'panda','panda eating','public\\images\\uploads\\31a4d11bc50ecb726de9160f37fa19be283fd08bff71.jpeg','public/images/uploads/thumbnail-31a4d11bc50ecb726de9160f37fa19be283fd08bff71.jpeg',0,'2020-05-13 22:39:50',56),(18,'burger','good burger','public\\images\\uploads\\2806e08b59d68d5ee6c7eb8481962542dff3180be897.jpeg','public/images/uploads/thumbnail-2806e08b59d68d5ee6c7eb8481962542dff3180be897.jpeg',0,'2020-05-14 18:52:21',56),(19,'Kobe','Kobe being a beast','public\\images\\uploads\\71a1ac769c8668e83d00cd9676feaf063993fd30759b.gif','public/images/uploads/thumbnail-71a1ac769c8668e83d00cd9676feaf063993fd30759b.gif',0,'2020-05-14 20:24:38',56),(20,'wards','when misplace them wards though','public\\images\\uploads\\bdbaa74403dddd1e8a1a948bddcbdf1615b22cea2dc8.png','public/images/uploads/thumbnail-bdbaa74403dddd1e8a1a948bddcbdf1615b22cea2dc8.png',0,'2020-05-14 22:13:38',56),(21,'riot fps game','getting into that beta baby','public\\images\\uploads\\b1618b2a071428baedd62c59b321821f238377893613.png','public/images/uploads/thumbnail-b1618b2a071428baedd62c59b321821f238377893613.png',0,'2020-05-14 22:14:59',56),(22,'big butt','bug butt problems','public\\images\\uploads\\8d6bb3269ae681af19af1b73f3bd3a8e799ad9eed9d9.jpeg','public/images/uploads/thumbnail-8d6bb3269ae681af19af1b73f3bd3a8e799ad9eed9d9.jpeg',0,'2020-05-14 22:18:31',57),(23,'land of the lost','when you with your best friend and your jam comes on','public\\images\\uploads\\908c11de10a93c6a07d0a75ab24360be38ce1027d47d.jpeg','public/images/uploads/thumbnail-908c11de10a93c6a07d0a75ab24360be38ce1027d47d.jpeg',0,'2020-05-14 22:28:49',58),(24,'shaq','when you say it\'s not spicy','public\\images\\uploads\\cadd70f3725ad9fd18b5ca1b366e6c93dc319944d350.jpeg','public/images/uploads/thumbnail-cadd70f3725ad9fd18b5ca1b366e6c93dc319944d350.jpeg',0,'2020-05-14 22:34:19',56),(25,'bulgogi','I love bulgogi','public\\images\\uploads\\8792655932a9827420294ce593bc056d632f991f8888.jpeg','public/images/uploads/thumbnail-8792655932a9827420294ce593bc056d632f991f8888.jpeg',0,'2020-05-16 15:24:26',64),(26,'kimchi','i like kimchi','public\\images\\uploads\\80caf98f886021d2fbef455fc4d6c4e297da9ea09b2a.jpeg','public/images/uploads/thumbnail-80caf98f886021d2fbef455fc4d6c4e297da9ea09b2a.jpeg',0,'2020-05-16 17:52:43',56),(27,'caramel drizzle baby','ohhhhh baby. look at that caramel drizzle.','public\\images\\uploads\\a2f0d77dce59c4c26589baa0a6761df803b0cd8c2341.jpeg','public/images/uploads/thumbnail-a2f0d77dce59c4c26589baa0a6761df803b0cd8c2341.jpeg',0,'2020-05-16 18:42:45',66),(28,'projector','I  want one but I\'m too broke','public\\images\\uploads\\f9f3fa49a099f61d8fe501ee627f14e9352b04e4a61d.jpeg','public/images/uploads/thumbnail-f9f3fa49a099f61d8fe501ee627f14e9352b04e4a61d.jpeg',0,'2020-05-18 18:31:42',56),(29,'illumnos','twitch.tv/illumnos','public\\images\\uploads\\434d8367167b6bcec6f75587df4b0ce5ad8b99f4c6dc.jpeg','public/images/uploads/thumbnail-434d8367167b6bcec6f75587df4b0ce5ad8b99f4c6dc.jpeg',0,'2020-05-18 21:21:35',69),(30,'Pandaaaaaaaa','I\'m a panda','public\\images\\uploads\\f6bfcadd4b40ead16c21b19d69addc7df3495059ced0.jpeg','public/images/uploads/thumbnail-f6bfcadd4b40ead16c21b19d69addc7df3495059ced0.jpeg',0,'2020-05-18 21:35:36',77),(31,'More Pandasss','Panda doing something','public\\images\\uploads\\22ad364c1975e3a9de4db5fe42cbceac6461a2186872.jpeg','public/images/uploads/thumbnail-22ad364c1975e3a9de4db5fe42cbceac6461a2186872.jpeg',0,'2020-05-18 21:36:36',77),(32,'groot','i am groot','public\\images\\uploads\\48f4f48732ca14dc6b43f470cf37d1a313827ed6b029.jpeg','public/images/uploads/thumbnail-48f4f48732ca14dc6b43f470cf37d1a313827ed6b029.jpeg',0,'2020-05-18 21:41:26',78),(33,'groot','i am groot','public\\images\\uploads\\92b25fc00cf030dcc28babadf3fc4ab3a41a8f902454.jpeg','public/images/uploads/thumbnail-92b25fc00cf030dcc28babadf3fc4ab3a41a8f902454.jpeg',0,'2020-05-18 21:42:35',78),(34,'groot','i am groot','public\\images\\uploads\\ee9c206bbba421648615dcb490c910eae226515f3bcd.jpeg','public/images/uploads/thumbnail-ee9c206bbba421648615dcb490c910eae226515f3bcd.jpeg',0,'2020-05-18 21:42:58',78),(35,'groot','i am groot','public\\images\\uploads\\7f0622a8ff5a76601cb81f311ca15c65acb611220fdd.jpeg','public/images/uploads/thumbnail-7f0622a8ff5a76601cb81f311ca15c65acb611220fdd.jpeg',0,'2020-05-18 21:43:13',78),(36,'groot','i am groot','public\\images\\uploads\\81b144197c87b7f222b6296ca60f083b9cdd0a8b49d0.jpeg','public/images/uploads/thumbnail-81b144197c87b7f222b6296ca60f083b9cdd0a8b49d0.jpeg',0,'2020-05-18 21:45:58',78),(37,'Topangaaaaaaaa!!!','Topangaaaaaaaaaa!!!','public\\images\\uploads\\9730f5ae4073ce9deeb926bf194695ca4786e8fd9af3.gif','public/images/uploads/thumbnail-9730f5ae4073ce9deeb926bf194695ca4786e8fd9af3.gif',0,'2020-05-18 22:07:48',79),(38,'groot','i am groot','public\\images\\uploads\\70e46dd8323d7813db1ce26f107a8787a0f31e7f6ee4.gif','public/images/uploads/thumbnail-70e46dd8323d7813db1ce26f107a8787a0f31e7f6ee4.gif',0,'2020-05-18 22:11:27',78),(39,'ice cream','i want ice cream','public\\images\\uploads\\31b637e7f0103a826a04f16120ce21b3ef0561530a2b.jpeg','public/images/uploads/thumbnail-31b637e7f0103a826a04f16120ce21b3ef0561530a2b.jpeg',0,'2020-05-18 22:13:22',58),(40,'d fish','d fish with that .4 second shot','public\\images\\uploads\\051b3e7774581a3b8258dca788785890cea69a38beaf.gif','public/images/uploads/thumbnail-051b3e7774581a3b8258dca788785890cea69a38beaf.gif',0,'2020-05-18 22:26:18',69),(41,'groot','i am groot','public\\images\\uploads\\90324998bf9fd9a444f4c14d7e7ac49f5b4178439c10.jpeg','public/images/uploads/thumbnail-90324998bf9fd9a444f4c14d7e7ac49f5b4178439c10.jpeg',0,'2020-05-18 22:27:13',78);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `usertype` int NOT NULL DEFAULT '0',
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (56,'bob123','bob123@gmail.com','$2b$10$gPTEPzQYLNZu8SSnQcjWyekDBwX5BkJbAJFHMaDrBKEiVzH/Ev7dO',0,0,'2020-05-02 15:15:21'),(57,'bigbootyjudy','bigbootyjudy@gmail.com','$2b$10$X7sdNzQoMSrVH4pE6GmFsOXK7IpfO6wqFCzDGy/v5t05P0PMTToSa',0,0,'2020-05-14 22:16:17'),(58,'cher','cher@cher.com','$2b$10$YN698K..b79t8DBnf7YiFunU0UK/F0RwLoKnPYRci.S0pMM0L3sS6',0,0,'2020-05-14 22:27:09'),(64,'bulgogi','bulgogi123@gmail.com','$2b$10$9oVNc/jMtipXd7YUUZq1fuk3vAAd6JxUkhAxO.eyfMN1CGFGrJY7G',0,0,'2020-05-16 12:25:10'),(65,'ilovepizza','ilovepizza@pizza.com','$2b$10$0/uz/DEsKzyHYQ3sWKZW7u7cDqvd41lAIuMUFNQrCCOqogBZstC9q',0,0,'2020-05-16 12:53:29'),(66,'drizzlefizzle','drizzlefizzle1@gmail.com','$2b$10$U52l2CL8iCzSoKrI9dVPbeJ3I3uOJkD0Z4nL85MUm1/.M9wQT7dQy',0,0,'2020-05-16 18:40:55'),(68,'robotjiggyjuice','robotjiggyjuice@gmail.com','$2b$10$.F40IZKUMhiYZdfYM6I1ru2V18yJ4EaSnrzWFQwHpE4a1.23TTqge',0,0,'2020-05-17 22:13:03'),(69,'epikmyk','appliepie@gmail.com','$2b$10$mvSGtqCAZI8AlSV6vK6nku9ozZv7KP7qZQpnHecmDJZ7MmNfFCZ4u',0,0,'2020-05-18 18:33:21'),(70,'shipoopi123','pooposho@hotmail.com','$2b$10$fFymWjqpE44WEFKhIWVCtO9w8DdIaR6imkCzWP/rIMlmlYj.I5lhu',0,0,'2020-05-18 19:16:02'),(71,'waterbottle','waterbottle@gmail.com','$2b$10$LkoLMYvAdi3s7hwjRHH1Z.PfgJwz.rJ8d3b3U5ALnsqYOHSv31PCa',0,0,'2020-05-18 19:37:19'),(72,'pacotaco','pacotaco@gmail.com','$2b$10$xN.TFaaiHpcEX5IBVV7JbuNs8azm.Y5ydBlQT923ZSIs2MZXxS8di',0,0,'2020-05-18 19:40:29'),(73,'chipotle','chipotle@gmail.com','$2b$10$QkjQiucG9VTev1bFL0MEq.XqPqUSVTVNRWK/S08ijnPbBVQPttUN2',0,0,'2020-05-18 19:42:06'),(74,'apple','apple@gmail.com','$2b$10$SumUQJffiuvgh/TZxB2id.MeMZKCL7GAbKjJNHhVsq.0ssDBc2XDO',0,0,'2020-05-18 19:47:07'),(75,'windstruck44','windstruck44@gmail.com','$2b$10$Hcv3f1DqPqJrFrKqJemk/.AEgFUXNz/rzt9bk.aklP5QowNKmJx2q',0,0,'2020-05-18 19:52:49'),(76,'bob12345','pooposho123@hotmail.com','$2b$10$c1p4wUCyLV/ZhI1WDyW3LehIhANTM5wUasLieIeYwc67VOaalM2b2',0,0,'2020-05-18 19:53:56'),(77,'panda','panda@gmail.com','$2b$10$AThb6sSSy92YmMOC1yXHFeOUCcdI5pw0Ix.6N1xknTWA0J/nYjnhy',0,0,'2020-05-18 21:34:22'),(78,'groot','groot@groot.com','$2b$10$eXikXL3SBxpwcRIqcAaYeeNZQ4CtgyUifmjK.nbJ8BMSwL6TehOp.',0,0,'2020-05-18 21:37:38'),(79,'cory','topanga@gmail.com','$2b$10$ElcSw2kMpaAcMf8K9Q8KPegHPaShHaRUpRUVyqp0SsFZRlu5vhHRy',0,0,'2020-05-18 22:06:15');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-19  0:53:23
