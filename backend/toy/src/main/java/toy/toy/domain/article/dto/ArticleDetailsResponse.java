package toy.toy.domain.article.dto;

import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import toy.toy.domain.article.domain.Article;
import toy.toy.domain.comment.domain.Comment;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ArticleDetailsResponse {

    private Long articleId;
    private String title;
    private String content;
    private Date lastDate;
    private List<CommentResponse> comments;
    // 차후 댓글 추가 예정

    public static ArticleDetailsResponse toResponse(Article article, List<Comment> comments) {
        return ArticleDetailsResponse.builder()
            .articleId(article.getId())
            .title(article.getTitle())
            .content(article.getContent())
            .lastDate(article.getCreateDate())
            .comments(CommentResponse.toResponse(comments)).build();
    }
}