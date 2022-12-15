-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2022 at 06:47 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestionenregistrement`
--

-- --------------------------------------------------------

--
-- Table structure for table `apmf_session`
--

CREATE TABLE `apmf_session` (
  `session_id` varchar(128) NOT NULL,
  `expires` int(11) NOT NULL,
  `data` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `apmf_session`
--

INSERT INTO `apmf_session` (`session_id`, `expires`, `data`) VALUES
('gnk--c0YXV4QbXClPGSE4pnDKesx-Zko', 1670571573, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('0UrMwiBqxfx73ZhVWGUqXdY44VBdBz95', 1670571711, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('37sJMPNfAQmDoxzRSVVE6HuYAzH3LIVE', 1670571876, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('qRhf-K_zqyIvGstXu_4pVwtVS6f1QN2x', 1670571889, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('asBxzLvaMkxup9GOOwR0YCY_ESqwOKMD', 1670572232, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('5K3-ZWSob4g18Wy5dBPHIAHwwr7noh1x', 1670572331, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('SF0R9xOWktfr0VixZSy5FyaNT9wI1Pr5', 1670573202, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('4zSuoy0UN3m5UkuloxhpDLVIkEdAeK0Z', 1670573296, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('S7eQ9ijR6IsH8tJYVXTSrlDpAQXtZJ4g', 1670573877, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('2Q8MMnniEjb8l8ro0VDVvs_7LA1q9OMi', 1670573910, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('AEbqFnKzZZkxBKr4UnsqmTAKBtYKaY3O', 1670573942, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('42LEsVqpFpGOYY-nUF6ErNh71HZBDlc4', 1670574068, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('LrGUFocJ3M3JiNJUkUfZSzuMZkN8OTnw', 1670574119, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('pTbrswn-XO9E8XiCeQImUjt2k_679lk0', 1670574142, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('xJsHISBMRtgV5HLOrAZD6fSjNTS8w9_l', 1670574171, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('zhAZc6sy9rZONdWscXYSV6NsE4omNA7d', 1670574242, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('o971ZHHHHCQ067pR_gmvtZH32unOjv1v', 1670574269, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('yCxhfrYjOn-YROlx-hZ1dwEoyA7X8AYl', 1670574317, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":3}'),
('3XUy_sVKh1IhTnvrMm5YcH_C3wR2G3n1', 1670574359, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":3}'),
('xamSsgiF77Yirm__qKsXIx2Lj0vHZUu7', 1670574442, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('I8-PnKmPPqFh8_GExqpEux_OwCX-StrN', 1670574529, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":3}'),
('FY52mCKqqmhHN8JnAaHqMepchIijbTOV', 1670575027, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('pt1e9uuceugAcIV65N07ZqLaC-qJSFRo', 1670575310, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('0qTxWenkVse-6B5w_fvSJqO12tBcPT9h', 1670575520, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('yyl917EaJhikXWYstzuOeviLu1tw2o7B', 1670588012, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('aXKlmgk0TlTXkbniyUbpHfvRDJPxglVl', 1670600382, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('43yYtWvHdhnff7v6c9FVJXBTYjxRFcds', 1670647338, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}'),
('PzxpquT_N3-y_7tk-nvM5HcAuCWUHAYz', 1670650609, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"userID\":1}');

-- --------------------------------------------------------

--
-- Table structure for table `attribution`
--

CREATE TABLE `attribution` (
  `idAttr` int(11) NOT NULL,
  `numAttr` varchar(50) NOT NULL,
  `nomAttr` varchar(50) NOT NULL,
  `prenomAttr` varchar(50) NOT NULL,
  `dateAttr` date NOT NULL,
  `posteAttr` varchar(100) NOT NULL,
  `missionsAttr` varchar(255) NOT NULL,
  `activiteAttr` varchar(255) NOT NULL,
  `superieurAttr` varchar(255) NOT NULL,
  `diplomeAttr` varchar(255) NOT NULL,
  `autreCompAttr` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attribution`
--

INSERT INTO `attribution` (`idAttr`, `numAttr`, `nomAttr`, `prenomAttr`, `dateAttr`, `posteAttr`, `missionsAttr`, `activiteAttr`, `superieurAttr`, `diplomeAttr`, `autreCompAttr`) VALUES
(1, '452', 'AMBINIMANANJARA', 'Andoniaina Giovanni Elie', '2022-11-25', 'SPECIALISTE EN INFORMATIQUE', 'TAMATAVE', 'DEVELOPPEUR WEB', 'DRH  ANTANANARIVO', 'LICENCE EN INFORMATIQUE', 'MAINTENANCE'),
(25, '56', 'RASOANDRAINY', 'Marie Louise', '2022-11-23', 'ARCHITECTURE', 'FRANCE', 'PLAN DE MAISON', 'DRH  ANTANANARIVO', 'LICENCE', 'DESSINATEUR');

-- --------------------------------------------------------

--
-- Table structure for table `tableau`
--

CREATE TABLE `tableau` (
  `idTab` int(10) NOT NULL,
  `idTable` varchar(10) NOT NULL,
  `activiteTable` varchar(255) NOT NULL,
  `piloteTable` varchar(50) NOT NULL,
  `typeTable` varchar(50) NOT NULL,
  `dateDebTable` date NOT NULL,
  `dateFiTable` date NOT NULL,
  `trimTable` varchar(10) NOT NULL,
  `informationTable` varchar(255) NOT NULL,
  `progressionTable` varchar(50) NOT NULL,
  `pourcentageTable` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tableau`
--

INSERT INTO `tableau` (`idTab`, `idTable`, `activiteTable`, `piloteTable`, `typeTable`, `dateDebTable`, `dateFiTable`, `trimTable`, `informationTable`, `progressionTable`, `pourcentageTable`) VALUES
(5, '02', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DOM', 'Néant', '2022-11-17', '2022-11-30', '10', 'Réalisé à 90% au siège,100% DRA Toamasina', 'Bouclée', 100),
(8, '103', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'SMQ', 'Néant', '2022-11-24', '2022-11-30', '12', 'Réalisé à 90% au siège,100% DRA Toamasina', 'phase finale', 75),
(9, '100', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'SMQ', 'Néant', '2022-11-23', '2022-11-30', '12', 'Réalisé à 90% au siège,100% DRA Toamasina', 'phase finale', 75),
(10, '32', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DAGC', 'Néant', '2022-11-22', '2022-11-30', '12', 'Réalisé à 90% au siège,100% DRA Toamasina', 'phase finale', 75),
(11, '1022', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'SMQ', 'Néant', '2022-11-15', '2022-11-30', '12', 'Réalisé à 90% au siège,100% DRA Toamasina', 'Bouclée', 100),
(16, '322', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DAGC', 'Néant', '2022-12-22', '2022-12-30', '12', 'Réalisé à 90% au siège,100% DRA Toamasina', 'phase finale', 75),
(17, '200', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DOM', 'Néant', '2022-12-15', '2022-12-31', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(18, '1021', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DEM', 'Néant', '2022-12-14', '2022-12-31', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(19, '10222', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DAGC', 'Néant', '2022-12-06', '2022-12-29', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(20, '1034', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DAGC', 'Néant', '2022-12-06', '2022-12-09', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(21, '208', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DOM', 'Néant', '2022-12-02', '2022-12-30', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(22, '1031', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DAGC', 'Néant', '2022-12-06', '2022-12-31', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(23, '10224', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DOM', 'Néant', '2022-12-02', '2022-12-31', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(24, '1035', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'SMQ', 'Néant', '2022-12-02', '2022-12-31', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(25, '105', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DOM', 'Néant', '2022-12-02', '2022-12-30', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(26, '321', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DOM', 'Néant', '2022-12-02', '2022-12-31', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(27, '1032', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DOM', 'Néant', '2022-12-02', '2022-12-31', '125', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(28, '002', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'SMQ', 'Néant', '2022-12-02', '2022-12-31', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(29, '1038', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DAGC', 'Néant', '2022-12-01', '2022-12-31', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(30, '289', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DOM', 'Néant', '2022-12-01', '2022-12-08', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(31, '10220', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DOM', 'Néant', '2022-12-05', '2022-12-30', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75),
(32, '035', 'Acquisition Logiciel de Comptablilité(Ordinateur/Agence Comptable)', 'DAGC', 'Néant', '2022-12-01', '2022-12-31', '12', 'Réalisé à 90% au siège,100% DRA Toamasinaqsd', 'phase finale', 75);

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur_apmf`
--

CREATE TABLE `utilisateur_apmf` (
  `id` int(11) NOT NULL,
  `nom_utilisateur` varchar(50) NOT NULL,
  `prenom_d_utilisateur` varchar(50) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `whatsapp` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `admin` int(1) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `utilisateur_apmf`
--

INSERT INTO `utilisateur_apmf` (`id`, `nom_utilisateur`, `prenom_d_utilisateur`, `contact`, `whatsapp`, `email`, `admin`, `password`) VALUES
(1, 'AMBINIMANANJARA', 'Andoniaina Giovanni Elie', '0343317719', '1545354655', 'givannielie18ambinimananjara@gmail.com', 1, '18072000'),
(3, 'RASOANDRAINY', 'Marie Louise', '0345590198', '12345678', 'giovanni@gmail.com', 0, '07182000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attribution`
--
ALTER TABLE `attribution`
  ADD PRIMARY KEY (`idAttr`);

--
-- Indexes for table `tableau`
--
ALTER TABLE `tableau`
  ADD PRIMARY KEY (`idTab`);

--
-- Indexes for table `utilisateur_apmf`
--
ALTER TABLE `utilisateur_apmf`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attribution`
--
ALTER TABLE `attribution`
  MODIFY `idAttr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tableau`
--
ALTER TABLE `tableau`
  MODIFY `idTab` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `utilisateur_apmf`
--
ALTER TABLE `utilisateur_apmf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
