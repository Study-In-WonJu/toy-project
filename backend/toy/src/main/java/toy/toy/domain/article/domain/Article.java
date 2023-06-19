package toy.toy.domain.article.domain;

import com.sun.istack.NotNull;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import toy.toy.domain.article.dto.CreateArticleRequest;

@Entity
@Table(name = "article")
@Getter
@Builder
@AllArgsConstructor
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String title;

    @NotNull
    private String content;

    private Date create_date;

    public static Article createArticle(CreateArticleRequest request) {
        return Article.builder().title(request.getTitle()).content(request.getContent())
            .create_date(new Date()).build();
    }
}