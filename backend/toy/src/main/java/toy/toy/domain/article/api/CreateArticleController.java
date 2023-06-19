package toy.toy.domain.article.api;

import java.net.URI;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import toy.toy.domain.article.application.CreateArticleService;
import toy.toy.domain.article.dto.CreateArticleRequest;

@RestController
@RequestMapping("/article")
@RequiredArgsConstructor
public class CreateArticleController {

    private final CreateArticleService createArticleService;

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody CreateArticleRequest request) {
        Long articleId = createArticleService.create(request);
        return ResponseEntity.created(URI.create("/article/" + articleId)).build();
    }
}