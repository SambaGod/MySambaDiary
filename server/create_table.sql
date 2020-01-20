DROP TABLE IF EXISTS `school`;

CREATE TABLE `school` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) DEFAULT NULL,
  `city` varchar(60) DEFAULT NULL,
  `country` varchar(40) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `registrationdate` date DEFAULT NULL,
  PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `school`;

CREATE TABLE `mylogin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `isadmin` tinyint(1) DEFAULT NULL,
  `registrationdate` date DEFAULT NULL,
  `school` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `school` (`school`),
  CONSTRAINT `mylogin_ibfk_1` FOREIGN KEY (`school`) REFERENCES `school` (`id`));

DROP TABLE IF EXISTS `event`;

CREATE TABLE `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `organizer` int(11) NOT NULL,
  `fee` decimal(4,2) DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `published` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `organizer` (`organizer`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`organizer`) REFERENCES `school` (`id`));

DROP TABLE IF EXISTS 'attends'

CREATE TABLE `attends` (
  `eventid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`eventid`,`userid`),
  KEY `userid` (`userid`),
  CONSTRAINT `attends_ibfk_1` FOREIGN KEY (`eventid`) REFERENCES `event` (`id`),  CONSTRAINT `attends_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `mylogin` (`id`))

