create table comment (
    id bigint not null auto_increment,
    content longtext,
    create_date datetime(6),
    article_id bigint not null,
    primary key (id)
);

alter table comment
add constraint comment_article_id_foreign_key
foreign key (article_id)
references article (id) on delete cascade;