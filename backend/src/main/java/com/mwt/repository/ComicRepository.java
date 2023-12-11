package com.mwt.repository;

import com.mwt.model.ComicEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComicRepository extends JpaRepository<ComicEntity, Long> {
    // You can add custom query methods here if needed
}
