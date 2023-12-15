package com.mwt.controller;

import com.mwt.model.ComicEntity;
import com.mwt.repository.ComicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comics")
public class ComicController {

    private final ComicRepository comicRepository;

    @Autowired
    public ComicController(ComicRepository comicRepository) {
        this.comicRepository = comicRepository;
    }

    @GetMapping("/all")
    public List<ComicEntity> getAllComics() {
        return comicRepository.findAll();
    }

    @PostMapping("/create")
    public ComicEntity createComic(@RequestBody ComicEntity comic) {
        return comicRepository.save(comic);
    }

    @PutMapping("/update/{id}")
    public ComicEntity updateComic(@PathVariable Long id, @RequestBody ComicEntity updatedComic) {
        ComicEntity existingComic = comicRepository.findById(id).orElse(null);
        if (existingComic != null) {
            existingComic.setTitle(updatedComic.getTitle());
            return comicRepository.save(existingComic);
        }
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteComic(@PathVariable Long id) {
        comicRepository.deleteById(id);
    }
}
