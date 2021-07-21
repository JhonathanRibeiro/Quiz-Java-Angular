(1,'Ano de fundação da IDS? ', 'facil'),
(2,'Qual o ramo de atuação da empresa? ', 'facil'),
(3,'Qual foi o primeiro sistema da IDS? ', 'media'),
(4,'Qual foi o primeiro sistema comercializado pela IDS?', 'dificil'),
(5,'A IDS é especialista em quais áreas?', 'facil'),
(6,'Qual foi o primeiro cliente conquistado pela IDS no segmento público?', 'dificil'),
(7,'Hoje, nossos sistemas estão presentes em 8 estados Brasileiros quais são? ?', 'dificil'),
(8,'Atualmente a IDS atende quantos municípios?', 'facil'),
(9,'Quais são nossos aplicativos?', 'media'),
(10,'Em 2021, recebemos a certificação da? ', 'facil'),

(11,'Quantas vezes a IDS obteve uma certificação na SBIS?', 'media'),
(12,'O sistema IDS Educação pode ser utilizado, por ?(', 'facil'),
(13,'Atualmente somos em quantos colaboradores?', 'facil'),
(14,'Nossa missão é?', 'media'),
(15,'Quais são os nossos valores? ', 'media'),
(16,'Qual é a nossa visão?', 'media'),
(17,'Total médio de atendimentos do suporte por mês?', 'dificil'),
(18,'Qual o percentual das avaliações ótimas em 2021 pelo suporte?', 'dificil'),
(19,'Qual a média de tickets abertos por dia no suporte?', 'dificil'),

(20,'Qual a média diária de tráfego de rede da IDS?', 'dificil'),
(21,'Quantos servidores virtualizados a IDS possui?', 'media'),
(22,'Quantos computadores físicos a IDS possui?', 'facil'),
(23,'Qual opção melhor descreve as abordagens de UX e UI design', 'media'),
(24,'O primeiro nome do sistema da área social da IDS se chamava WinSocial, no ano de ______ o WinSocial deixou de ser um sistema e foi transformado em um módulo do sistema WinSaúde. Depois disso no ano de ______ voltou a ser um sistema independente chamado de IDSSocial. Quais foram os anos correspondentes?', 'dificil'),
(25,'Em qual ano iniciou-se a progamação do framework17 (Bivlioteca de desenvolvimento Web da IDS)', 'media'),
(26,'Quais as duas linguagens de programação mais utilizada na história da IDS?', 'dificil'),
(27,'Quantas issues ja foram criadas no Jira até 22/06/2021?', 'dificil'),
(28,'Quantos projetos existem no repositório de códigos fontes atualmente?', 'dificil'),
(29,'Em qual versão do sistema de sáude foi implementado o funcionamento com banco de dados SQL Server?', 'dificil')
(30,'Em que ano foi iniciado o desenvolvimento do aplicativo mobile correspondente ao ESF?', 'dificil')


insert into opcao (id,descricao,opcao_correta,score,pergunta_id)
values 
(1,'2004','NAO',1,1),
(2,'2011','NAO',1,1),
(3,'2003','SIM',1,1),
(4,'2006','NAO',1,1),

(5,'Gestão Pública Municipal','SIM',1,2),
(6,'Gestão Privada de Dados','NAO',1,2),
(7,'Venda de equipamentos de Informática','NAO',1,2),
(8,'Comércio Varejista','NAO',1,2),

(9, 'Farmácia','SIM',2,3),
(10,'Social','NAO',2,3),
(11,'Rural','NAO',2,3),
(12,'Saúde','NAO',2,3),

(13,'Farmácia ','NAO',3,4),
(14,'Social','NAO',3,4),
(15,'Rural','SIM',3,4),
(16,'Saúde ','NAO',3,4),

(17,'Saúde, Ponto Eletrônico e Educação','NAO',1,5),
(18,'Rural, Social e Educação ','NAO',1,5),
(19,'Hospitalar, Educação e Biblioteca','NAO',1,5),
(20,'Saúde, Social e Educação','SIM',1,5),
 
(21,'Pato Branco','NAO',3,6),
(22,'Candoi','SIM',3,6),
(23,'São Jose dos Pinhais','NAO',3,6),
(24,'Pinhais','NAO',3,6),
 
(25,'Paraná, Santa Catarina, Rio Grande do Sul, São Paulo, Rio de Janeiro, Bahia, Mato Grosso e Ceará.','NAO',3,7),
(26,'Paraná, Santa Catarina, Rio Grande do Sul, São Paulo, Rio de Janeiro, Bahia, Minas Gerais e Ceará','NAO',3,7),
(27,'Paraná, Santa Catarina, Rio Grande do Sul, São Paulo, Bahia, Sergipe, Rio Grande do Norte e Ceará','SIM',3,7),
(28,'Paraná, Santa Catarina, Rio Grande do Norte, Minas Gerias, São Paulo, Rio de Janeiro, Bahia, Mato Grosso','NAO',3,7),
 
(29,'1150','NAO',1,8),
(30,'252','SIM',1,8),
(31,'275','NAO',1,8),
(32,'156','NAO',1,8),
 
(33,'AD Saúde, AD Endemias, Teleatendimento Saúde, Mais saúde cidadão, Agente, Gestor, e-cidadão','SIM',2,9),
(34,'AD Saúde, AD EndemiasDengue, Teleatendimento Saúde, agenteids, Gestor, e-cidadão','NAO',2,9),
(35,'ESF, dengueids, Agenteids, Mais saúde cidadão, appetite, e-cidadão','NAO',2,9),
(36,'ESF, Combate Endemias, Agente, cidadeinteligenteids, appetite, e-cidadão','NAO',2,9),
 
(37,'MPSBR','NAO',1,10),
(38,'SBIS','SIM',1,10),
(39,'ISO901','NAO',1,10),
(40,'APRAS','NAO',1,10),
 
(41,'1','NAO',2,11),
(42,'2','NAO',2,11),
(43,'3','SIM',2,11),
(44,'4','NAO',2,11),
 
(45,'Escola de Inglês','NAO',1,12),
(46,'Escola Profissionalizante Técnica','NAO',1,12),
(47,'CEJA','NAO',1,12),
(48,'Escolas Municipais','SIM',1,12),

(49,'102','SIM',1,13),
(50,'88','NAO',1,13),
(51,'210','NAO',1,13),
(52,'108','NAO',1,13),

(53,'Entregar produtos e assessoria com diferenciais tecnológicos, colaborador com a excelência no atendimento as pessoas','NAO',2,14),
(54,'Entregar produtos e assessoria com diferenciais tecnológicos, colaborador com a excelência no atendimento as prefeituras','NAO',2,14),
(55,'Entregar produtos e serviços com diferenciais tecnológicos, colaborador com a excelência no atendimento os consorcio de saúde','NAO',2,14),
(56,'Entregar produtos e serviços com diferenciais tecnológicos, colaborador com a excelência no atendimento as pessoas','SIM',2,14),

(57,'Empatia, comprometimento, iniciativa, trabalho em equipe, inovação, segurança','NAO',2,15),
(58,'Respeito, comprometimento, iniciativa, trabalho em equipe, inovação, orientação para resultados','SIM',2,15),
(59,'Amor, comprometimento, iniciativa, trabalho em equipe, inovação, doação','NAO',2,15),
(60,'Respeito, comprometimento, iniciativa, união faz a força, inovação, orientação para resultados','NAO',2,15),

(61,'Ser referência em designer de software para atendimento as pessoas.','NAO',2,16),
(62,'Ser referência em inovações tecnológicas para excelência no atendimento as pessoas. ','SIM',2,16),
(63,'Ser referência em inovações tecnológicas para excelência no desenvolvimento de novas tecnologias ','NAO',2,16),
(64,'Ser referência em inovações tecnológicas para excelência no atendimento do segmento privado','NAO',2,16),

(65,'Media de 2365','SIM',3,17),
(66,'Media de 115','NAO',3,17),
(67,'Media de 25210','NAO',3,17),
(68,'Media de 8582','NAO',3,17),

(69,'10%','NAO',3,18),
(70,'88,9%','SIM',3,18),
(71,'48%','NAO',3,18),
(72,'99,9%','NAO',3,18),

(73,'350','NAO',3,19),
(74,'100','SIM',3,19),
(75,'45','NAO',3,19),
(76,'220','NAO',3,19),

(77,'543GB','NAO',3,20),
(78,'337GB','SIM',3,20),
(79,'420GB','NAO',3,20),
(80,'390GB','NAO',3,20),

(81,'30','NAO',2,21),
(82,'55','NAO',2,21),
(83,'85','SIM',2,21),
(84,'110','NAO',2,21),

(85,'78','NAO',1,22),
(86,'90','NAO',1,22),
(87,'110','SIM',1,22),
(88,'190','NAO',1,22),

(89,'UX está relacionado com a experiência do usuário e com seus sentimentos, enquanto UI é a forma com que o usuário alcança tal experiência.','SIM',2,23),
(90,'UX está relacionado com a experiência do usuário e com seus sentimentos, enquanto UI é a forma de lidar com as dores e emoções dos usuários.','NAO',2,23),
(91,'UI está relacionado com a experiência do usuário e com seus sentimentos, enquanto UX é a forma com que o usuário alcança tal experiência.','NAO',2,23),
(92,'UI está relacionado com a experiência do usuário e com seus sentimentos, enquanto UX é toda a parte visual e interativa.','NAO',2,23),

(93,'2008, 2013','NAO',3,24),
(94,'2009, 2013','SIM',3,24),
(95,'2008, 2014','NAO',3,24),
(96,'2009, 2014','NAO',3,24),

(97,'2016','NAO',2,25),
(98,'2017','NAO',2,25),
(99,'2018','SIM',2,25),
(100,'2020','NAO',2,25),

(101,'Delphi e Flex','NAO',2,26),
(102,'Java e Flex','NAO',2,26),
(103,'Delphi e Java','SIM',2,26),
(104,'Delphi e Angular','NAO',2,26),

(105,'73498','NAO',3,27),
(106,'80572','SIM',3,27),
(107,'10686','NAO',3,27),
(108,'10875','NAO',3,27),

(109,'171','NAO',3,28),
(110,'195','NAO',3,28),
(111,'217','NAO',3,28),
(112,'244','SIM',3,28),

(113,'2.00.0','NAO',3,29),
(114,'3.00.0','NAO',3,29),
(115,'4.00.0','SIM',3,29),
(116,'5.00.0','NAO',3,29),

(117,'2010','NAO',3,30),
(118,'2012','NAO',3,30),
(119,'2014','SIM',3,30),
(120,'2016','NAO',3,30),
