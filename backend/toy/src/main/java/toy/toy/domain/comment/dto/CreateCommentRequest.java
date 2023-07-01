package toy.toy.domain.comment.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CreateCommentRequest {

    @NotEmpty(message = "내용을 입력해주세요.")
    @NotBlank(message = "내용을 입력해주세요.")
    private String content;
}