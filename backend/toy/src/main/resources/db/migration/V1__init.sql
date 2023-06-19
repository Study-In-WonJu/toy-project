create table article (
    id bigint not null auto_increment,
    title varchar(50) not null,
    content longtext,
    create_date datetime(6),
    primary key (id)
);