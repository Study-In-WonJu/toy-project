package toy.toy.domain.article.dao;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ArticleMapper {

    @Delete("DELETE FROM article WHERE id=#{articleId}")
    int deleteById(Long articleId);
}