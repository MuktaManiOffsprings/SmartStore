/*Buying a Notebook*/
create database FamilyInfo;

/*Create structure in which we need to store information*/
Create table FamilyEmailId
(
	FName		char(10),
	EmailId		char(30),
	DoB			date
);

insert into FamilyEmailId (FName, EmailId, DoB) values ('Satya','s.jena@gmail.com','13 May 2001');
insert into FamilyEmailId (FName, EmailId, DoB) values ('Ankita', 'a.jena@gmail.com', '02 Jul 2002');
insert into FamilyEmailId (FName, EmailId, DoB) values ('Amrit', 'amrit.dhal@dhal.com', '28 Feb 1991');
insert into FamilyEmailId (FName, EmailId, DoB) values ('Chandan', '', '28 Dec 2001');

select * from FamilyEmailId;
