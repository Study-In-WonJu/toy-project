package toy.toy.domain.comment.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import toy.toy.domain.article.dto.EditArticleRequest;
import toy.toy.domain.comment.application.ChangeCommentService;

@RestController
@RequestMapping("comment")
@RequiredArgsConstructor
public class ChangeCommentController {

    private final ChangeCommentService changeCommentService;

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long id) {
        changeCommentService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> editComment(@PathVariable Long id, @RequestBody
    EditArticleRequest request) {
        changeCommentService.edit(id, request.getContent());
        return ResponseEntity.noContent().build();
    }
}
