package toy.toy.domain.article.api;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import toy.toy.domain.article.application.FindArticleService;
import toy.toy.domain.article.dto.ArticleDetailsResponse;
import toy.toy.domain.article.dto.ArticleResponse;

@RestController
@RequestMapping("/article")
@RequiredArgsConstructor
public class FindArticleController {

    private final FindArticleService findArticleService;

    @GetMapping
    public ResponseEntity<List<ArticleResponse>> findArticles() {
        List<ArticleResponse> responses = findArticleService.findArticles();
        return ResponseEntity.ok().body(responses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArticleDetailsResponse> findArticleOne(@PathVariable Long id) {
        ArticleDetailsResponse response = findArticleService.findDetails(id);
        return ResponseEntity.ok().body(response);
    }
}