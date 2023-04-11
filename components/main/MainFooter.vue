<template>
  <div class="footer">
        <h3 class="company-name">주식회사 Oksu</h3>
        <p class="company-info">
          사업자 등록번호 : 339-87-02590 | 대표 : 한동규
          <br />
          통신판매업 신고 번호 : 2022-서울성북-1090 | 서울특별시 성북구 고려대로 27길 30-2, 2층
          <br />
          02-593-0620 | loadit@loadit.co.kr
        </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  width: 100%;
  height: auto;
  background-color: #222;
  position : absolute;
  bottom : 0;
  /* z-index: 999; */
}
.company-name{
    font-size: 16px;
    font-weight: 700;
    color: #fff;
}
.company-info{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    color: #f1f2f3;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    margin-top: 24px;
    padding-left: 0;
    gap: 16px;
    list-style: none;
}

</style>