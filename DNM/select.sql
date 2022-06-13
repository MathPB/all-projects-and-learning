select 
	u.*,
	sce.*,
	sce.id,
	sce.date_beg_semester,
	sce.date_end_semester,
	sce.date_limit_diagnosis,
	sce.course_calendar_uid,
	u.user_cpf,
	u.ra,
	u.enrolment,
	sce.id,
	u.assessment_uid,
	sce.assessment_uid 
from
	users u
inner join study_class_enrolments sce on
	u.id = sce.user_id
where
	sce.class_semester = '2021.2'
and
	u.assessment_uid is null
and
	sce.assessment_uid is null
and
	u."access" = 2
and
	sce.placement_tag = 3
-- and
--	sce.id = 6217503