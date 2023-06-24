package toy.toy.domain.article.dto;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import toy.toy.domain.article.domain.Article;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ArticleResponse {

    private Long articleId;
    private String title;
    private Date lastDate;

    public static List<ArticleResponse> toResponses(List<Article> articles) {
        return articles.stream().map(
            (article -> new ArticleResponse(article.getId(), article.getTitle(),
                article.getCreateDate()))).collect(Collectors.toList());
    }
}