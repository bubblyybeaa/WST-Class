-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2025 at 05:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `registration_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `persons`
--

CREATE TABLE `persons` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `registration_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `persons`
--

INSERT INTO `persons` (`id`, `first_name`, `last_name`, `email`, `age`, `gender`, `registration_date`) VALUES
(1, 'John', 'Doe', 'john1@example.com', 21, 'Male', '2025-11-25 16:48:45'),
(2, 'Jane', 'Smith', 'jane1@example.com', 22, 'Female', '2025-11-25 16:48:45'),
(3, 'Mark', 'Cruz', 'mark1@example.com', 25, 'Male', '2025-11-25 16:48:45'),
(4, 'Anna', 'Lopez', 'anna1@example.com', 23, 'Female', '2025-11-25 16:48:45'),
(5, 'Paul', 'Reyes', 'paul1@example.com', 24, 'Male', '2025-11-25 16:48:45'),
(6, 'Mary', 'Gomez', 'mary1@example.com', 20, 'Female', '2025-11-25 16:48:45'),
(7, 'James', 'Santos', 'james1@example.com', 22, 'Male', '2025-11-25 16:48:45'),
(8, 'Liza', 'Torres', 'liza1@example.com', 21, 'Female', '2025-11-25 16:48:45'),
(9, 'Carl', 'Velasco', 'carl1@example.com', 23, 'Male', '2025-11-25 16:48:45'),
(10, 'Ella', 'Fernandez', 'ella1@example.com', 22, 'Female', '2025-11-25 16:48:45'),
(11, 'Rico', 'Valdez', 'rico1@example.com', 26, 'Male', '2025-11-25 16:48:45'),
(12, 'Mia', 'Martinez', 'mia1@example.com', 24, 'Female', '2025-11-25 16:48:45'),
(13, 'Leo', 'Ramos', 'leo1@example.com', 23, 'Male', '2025-11-25 16:48:45'),
(14, 'Nina', 'Chavez', 'nina1@example.com', 25, 'Female', '2025-11-25 16:48:45'),
(15, 'Vince', 'Bautista', 'vince1@example.com', 27, 'Male', '2025-11-25 16:48:45'),
(16, 'Kate', 'Castillo', 'kate1@example.com', 22, 'Female', '2025-11-25 16:48:45'),
(17, 'Chris', 'Aguilar', 'chris1@example.com', 21, 'Male', '2025-11-25 16:48:45'),
(18, 'Sara', 'Villanueva', 'sara1@example.com', 23, 'Female', '2025-11-25 16:48:45'),
(19, 'Josh', 'Navarro', 'josh1@example.com', 24, 'Male', '2025-11-25 16:48:45'),
(20, 'Bea', 'Manalo', 'bea1@example.com', 22, 'Female', '2025-11-25 16:48:45'),
(21, 'Noah', 'Lim', 'noah1@example.com', 23, 'Male', '2025-11-25 16:48:45'),
(22, 'Ivy', 'Ocampo', 'ivy1@example.com', 21, 'Female', '2025-11-25 16:48:45'),
(23, 'Henry', 'Medina', 'henry1@example.com', 24, 'Male', '2025-11-25 16:48:45'),
(24, 'Grace', 'Rivera', 'grace1@example.com', 26, 'Female', '2025-11-25 16:48:45'),
(25, 'Kyle', 'Tan', 'kyle1@example.com', 23, 'Male', '2025-11-25 16:48:45'),
(26, 'Diane', 'Uy', 'diane1@example.com', 21, 'Female', '2025-11-25 16:48:45'),
(27, 'Jordan', 'Yap', 'jordan1@example.com', 27, 'Male', '2025-11-25 16:48:45'),
(28, 'Ava', 'Chua', 'ava1@example.com', 22, 'Female', '2025-11-25 16:48:45'),
(29, 'Ryan', 'Go', 'ryan1@example.com', 26, 'Male', '2025-11-25 16:48:45'),
(30, 'Faye', 'Legaspi', 'faye1@example.com', 25, 'Female', '2025-11-25 16:48:45'),
(31, 'Ian', 'de Leon', 'ian1@example.com', 24, 'Male', '2025-11-25 16:48:45'),
(32, 'Jessa', 'Fabian', 'jessa1@example.com', 22, 'Female', '2025-11-25 16:48:45'),
(33, 'Todd', 'Mendoza', 'todd1@example.com', 23, 'Male', '2025-11-25 16:48:45'),
(34, 'Belle', 'Santiago', 'belle1@example.com', 21, 'Female', '2025-11-25 16:48:45'),
(35, 'Allan', 'Flores', 'allan1@example.com', 22, 'Male', '2025-11-25 16:48:45'),
(36, 'Megan', 'Quintos', 'megan1@example.com', 24, 'Female', '2025-11-25 16:48:45'),
(37, 'Drew', 'Cunanan', 'drew1@example.com', 26, 'Male', '2025-11-25 16:48:45'),
(38, 'Faith', 'Ponce', 'faith1@example.com', 23, 'Female', '2025-11-25 16:48:45'),
(39, 'Zack', 'Roldan', 'zack1@example.com', 25, 'Male', '2025-11-25 16:48:45'),
(40, 'Tina', 'Salazar', 'tina1@example.com', 21, 'Female', '2025-11-25 16:48:45'),
(41, 'Ralph', 'Austria', 'ralph1@example.com', 22, 'Male', '2025-11-25 16:48:45'),
(42, 'Sofia', 'Sy', 'sofia1@example.com', 23, 'Female', '2025-11-25 16:48:45'),
(43, 'Andre', 'Javier', 'andre1@example.com', 24, 'Male', '2025-11-25 16:48:45'),
(44, 'Lara', 'Cordero', 'lara1@example.com', 26, 'Female', '2025-11-25 16:48:45'),
(45, 'Owen', 'Domingo', 'owen1@example.com', 25, 'Male', '2025-11-25 16:48:45'),
(46, 'Hannah', 'Santos', 'hannah1@example.com', 22, 'Female', '2025-11-25 16:48:45'),
(47, 'Joel', 'Padilla', 'joel1@example.com', 27, 'Male', '2025-11-25 16:48:45'),
(48, 'Chloe', 'Mirasol', 'chloe1@example.com', 23, 'Female', '2025-11-25 16:48:45'),
(49, 'Bea', 'Apolinario', 'bestgirlever704@gmail.com', 20, 'Female', '2025-11-25 16:52:15'),
(51, 'Jane', 'Reyes', 'jane.reyes@yahoo.com', 20, 'Female', '2025-11-25 16:53:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `persons`
--
ALTER TABLE `persons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `persons`
--
ALTER TABLE `persons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
