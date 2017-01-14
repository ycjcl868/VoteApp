-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-01-14 16:56:49
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.5.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `voteApp`
--

-- --------------------------------------------------------

--
-- 表的结构 `cine`
--

CREATE TABLE `cine` (
  `cineId` int(11) NOT NULL,
  `cineName` varchar(20) NOT NULL,
  `ticket` int(11) DEFAULT NULL,
  `url` varchar(200) NOT NULL,
  `TYPE` varchar(30) DEFAULT NULL,
  `des` varchar(400) DEFAULT NULL,
  `publishTime` date DEFAULT NULL,
  `sta` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cine`
--

INSERT INTO `cine` (`cineId`, `cineName`, `ticket`, `url`, `TYPE`, `des`, `publishTime`, `sta`) VALUES
(15, 'wtc', 0, 'sss', '喜剧', 'sssssssss', '2017-01-10', 0),
(16, 'é¿å2', 0, '/upload/banner1.png', 'ææç±»,æ¬çç±»', 'é¿åé¿åé¿åé¿åé¿åé¿å', '2017-01-10', 0),
(17, '地一柱擎天', NULL, '地一柱擎天', NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- 表的结构 `log`
--

CREATE TABLE `log` (
  `userIP` varchar(50) NOT NULL,
  `token` varchar(50) NOT NULL,
  `cineId` int(11) DEFAULT NULL,
  `voteTime` timestamp NULL DEFAULT NULL,
  `province` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

--
-- 转存表中的数据 `log`
--

INSERT INTO `log` (`userIP`, `token`, `cineId`, `voteTime`, `province`) VALUES
('ss', 'df', 1000, '2017-01-08 02:08:57', 'xi,an'),
('127.0.0.2', 'ce50efbb9f8e1ef688b046daf05cdc0e', 1000, '2017-01-09 11:02:21', '陕西'),
('fcsdavc', 'fsadf', 1001, '2017-01-10 11:11:55', '河北');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cine`
--
ALTER TABLE `cine`
  ADD PRIMARY KEY (`cineId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cine`
--
ALTER TABLE `cine`
  MODIFY `cineId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
