package toy.toy.domain.article.dto;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import toy.toy.domain.article.domain.Article;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ArticleDetailsResponse {

    private Long articleId;
    private String title;
    private String content;
    private Date LastDate;
    // 차후 댓글 추가 예정

    public static ArticleDetailsResponse toResponse(Article article) {
        return ArticleDetailsResponse.builder().articleId(article.getId()).title(article.getTitle())
            .content(article.getContent()).LastDate(article.getCreateDate()).build();
    }
}