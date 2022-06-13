update 
	study_class_enrolments 
set
	assessment_uid = 
    case
        when u.assessment_uid = 'ENADE_ADM_15' then 'ENADE_ADM_15'
        when u.assessment_uid = 'ENADE_ADN_10' then 'ENADE_ADN_10'
        when u.assessment_uid = 'ENADE_AEU_20' then 'ENADE_AEU_20'
        when u.assessment_uid = 'ENADE_AGR_16' then 'ENADE_AGR_16'
        when u.assessment_uid = 'ENADE_BIO_10' then 'ENADE_BIO_10'
        when u.assessment_uid = 'ENADE_CGA_16' then 'ENADE_CGA_16'
        when u.assessment_uid = 'ENADE_CGH_16' then 'ENADE_CGH_16'
        when u.assessment_uid = 'ENADE_CTB_15' then 'ENADE_CTB_15'
        when u.assessment_uid = 'ENADE_DIR_15' then 'ENADE_DIR_15'
        when u.assessment_uid = 'ENADE_EDF_10' then 'ENADE_EDF_10'
        when u.assessment_uid = 'ENADE_EFB_16' then 'ENADE_EFB_16'
        when u.assessment_uid = 'ENADE_EMP_21' then 'ENADE_EMP_21'
        when u.assessment_uid = 'ENADE_ENF_16' then 'ENADE_ENF_16'
        when u.assessment_uid = 'ENADE_ENG_10' then 'ENADE_ENG_10'
        when u.assessment_uid = 'ENADE_ENG_22' then 'ENADE_ENG_22'
        when u.assessment_uid = 'ENADE_ENG_30' then 'ENADE_ENG_30'
        when u.assessment_uid = 'ENADE_EST_16' then 'ENADE_EST_16'
        when u.assessment_uid = 'ENADE_FAR_16' then 'ENADE_FAR_16'
        when u.assessment_uid = 'ENADE_FSO_16' then 'ENADE_FSO_16'
        when u.assessment_uid = 'ENADE_GCO_15' then 'ENADE_GCO_15'
        when u.assessment_uid = 'ENADE_GFI_15' then 'ENADE_GFI_15'
        when u.assessment_uid = 'ENADE_GID_10' then 'ENADE_GID_10'
        when u.assessment_uid = 'ENADE_GPU_15' then 'ENADE_GPU_15'
        when u.assessment_uid = 'ENADE_GRH_15' then 'ENADE_GRH_15'
        when u.assessment_uid = 'ENADE_HIS_10' then 'ENADE_HIS_10'
        when u.assessment_uid = 'ENADE_LOG_15' then 'ENADE_LOG_15'
        when u.assessment_uid = 'ENADE_LTR_10' then 'ENADE_LTR_10'
        when u.assessment_uid = 'ENADE_MAT_10' then 'ENADE_MAT_10'
        when u.assessment_uid = 'ENADE_MKT_15' then 'ENADE_MKT_15'
        when u.assessment_uid = 'ENADE_NUT_16' then 'ENADE_NUT_16'
        when u.assessment_uid = 'ENADE_PED_10' then 'ENADE_PED_10'
        when u.assessment_uid = 'ENADE_PGE_15' then 'ENADE_PGE_15'
        when u.assessment_uid = 'ENADE_SSO_10' then 'ENADE_SSO_10'
        when u.assessment_uid = 'ENADE_SVS_16' then 'ENADE_SVS_16'
    end
    from 
	users u 
where
	study_class_enrolments.user_id = u.id
and
	study_class_enrolments.class_semester = '2021.2'
and
	study_class_enrolments.date_beg_semester is null
and
	u."access" = 2