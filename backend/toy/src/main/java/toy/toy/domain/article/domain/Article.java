package toy.toy.domain.article.domain;

import com.sun.istack.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import toy.toy.domain.article.dto.CreateArticleRequest;
import toy.toy.domain.comment.domain.Comment;

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

    private Date createDate;

    @OneToMany(mappedBy = "article", orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    public static Article createArticle(CreateArticleRequest request) {
        return Article.builder().title(request.getTitle()).content(request.getContent())
            .createDate(new Date()).build();
    }

    public Article() {
    }

    public void updateContent(String content){
        this.content = content;
    }
}