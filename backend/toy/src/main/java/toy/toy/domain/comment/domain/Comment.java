package toy.toy.domain.comment.domain;

import com.sun.istack.NotNull;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import toy.toy.domain.article.domain.Article;
import toy.toy.domain.comment.dto.CreateCommentRequest;

@Entity
@Table(name = "comment")
@Getter
@Builder
@AllArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String content;

    private Date createDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ARTICLE_ID", nullable = false)
    private Article article;

    public Comment() {
    }

    public static Comment createComment(CreateCommentRequest request, Article article){
        return Comment.builder()
            .content(request.getContent())
            .createDate(new Date())
            .article(article)
            .build();
    }

    public void updateContent(String content){
        this.content = content;
    }
}