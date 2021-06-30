package com.example.apiquiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.apiquiz.models.Ranking;
import com.example.apiquiz.models.Resposta;

@Repository
public interface RankingRepository extends CrudRepository<Resposta, Long>{
	@Query(value = "select "
			+ "	distinct dense_rank() over ( "
			+ "	order by ( "
			+ "	select "
			+ "		coalesce(sum(op_subsql.score), 0) "
			+ "	from "
			+ "		resposta r2 "
			+ "	left join opcao op_subsql on "
			+ "		op_subsql.id = r2.opcao_id "
			+ "	where "
			+ "		op_subsql.opcao_correta = 'SIM' "
			+ "		and r2.usuario_id = r.usuario_id) desc, "
			+ "	( "
			+ "	select "
			+ "		coalesce(sum(r3.tempo_resposta), 0) "
			+ "	from "
			+ "		resposta r3 "
			+ "	left join opcao op_subsql on "
			+ "		op_subsql.id = r3.opcao_id "
			+ "	where "
			+ "		op_subsql.opcao_correta = 'SIM' "
			+ "		and r3.usuario_id = r.usuario_id) desc, u.id) as posicao, "
			+ "	u.nome, "
			+ "	( "
			+ "	select "
			+ "		coalesce(sum(op_subsql.score), 0) "
			+ "	from "
			+ "		resposta r2 "
			+ "	left join opcao op_subsql on "
			+ "		op_subsql.id = r2.opcao_id "
			+ "	where "
			+ "		op_subsql.opcao_correta = 'SIM' "
			+ "		and r2.usuario_id = r.usuario_id ) pontos, "
			+ "	( "
			+ "	select "
			+ "		coalesce(sum(r3.tempo_resposta), 0) "
			+ "	from "
			+ "		resposta r3 "
			+ "	left join opcao op_subsql on "
			+ "		op_subsql.id = r3.opcao_id "
			+ "	where "
			+ "		op_subsql.opcao_correta = 'SIM' "
			+ "		and r3.usuario_id = r.usuario_id ) soma_tempo_respostas "
			+ "from "
			+ "	resposta r "
			+ "left join opcao op on "
			+ "	op.id = r.opcao_id "
			+ "left join usuario u on "
			+ "	u.id = r.usuario_id", nativeQuery = true)
	
	List<Ranking> findByRanking();
}
