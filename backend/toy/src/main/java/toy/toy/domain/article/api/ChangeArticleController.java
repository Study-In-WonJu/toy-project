package toy.toy.domain.article.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import toy.toy.domain.article.application.ChangeArticleService;

@RestController
@RequestMapping("/article")
@RequiredArgsConstructor
public class ChangeArticleController {

    private final ChangeArticleService changeArticleService;

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Long id){
        changeArticleService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
