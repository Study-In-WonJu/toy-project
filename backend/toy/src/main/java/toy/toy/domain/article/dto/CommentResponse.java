package toy.toy.domain.article.dto;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import toy.toy.domain.comment.domain.Comment;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentResponse {

    private Long commentId;
    private String content;
    private Date lastDate;

    public static List<CommentResponse> toResponse(List<Comment> comments) {
        return comments.stream().map(comment ->
                CommentResponse.builder()
                    .commentId(comment.getId())
                    .content(comment.getContent())
                    .lastDate(comment.getCreateDate()).build())
            .collect(Collectors.toList());
    }
}