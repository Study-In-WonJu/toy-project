package toy.toy.domain.comment.api;

import java.net.URI;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import toy.toy.domain.comment.application.CreateCommentService;
import toy.toy.domain.comment.dto.CreateCommentRequest;

@RestController
@RequestMapping("article/{articleId}/comment")
@RequiredArgsConstructor
public class CreateCommentController {

    private final CreateCommentService createCommentService;

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody @Valid CreateCommentRequest request,
        @PathVariable("articleId") @Valid Long articleId) {
        createCommentService.create(request, articleId);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}