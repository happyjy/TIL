# as-is system > sequence 이관시 to-be sequence 생성후 start 변경 방법

> 시퀀스 생성 
> increment 설정(마지막 사용한 숫자만큼) 
> nextval로 sequence 확인
> increment 1로 설정
 
'''
alter sequence SEQ_DOC increment by 1001;
select SEQ_DOC.nextval from dual;
alter sequence SEQ_DOC increment by 1;
'''

