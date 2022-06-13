update
	study_class_enrolments
set
	date_end_semester = '2021-11-29'
	date_beg_semester = 
	case
		when bu_uid = 'BU_01' then date('2021-08-23')
		else date('2021-08-02')
	end,
	client_uid = 'KRTN',
	assessment_uid = u.assessment_uid,
	course_calendar_uid = 'KRTN_12',
	--	date_limit_diagnosis = '2021-09-13'
--	course_stage = 
--	case
--		when u.progresso = 100 then '8'
--		when u.progresso = 75 then '6'
--		when u.progresso = 50 then '4'
--		when u.progresso = 25 then '2'
--		when u.progresso = 0 then '0'
--	end,
--	progresso = 	
--	case
--		when u.progresso = 100 then 100
--		when u.progresso = 75 then 75
--		when u.progresso = 50 then 50
--		when u.progresso = 25 then 25
--		when u.progresso = 0 then 0
--	end
from study_class_enrolments as sce 
join users as u on sce.user_id = u.id 
where
	sce.class_semester = '2021.2'
and
	sce.date_beg_semester is null
and
	u."access" = 2