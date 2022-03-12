<template>
  <div class="p-user-account-login u-pt24">
    <c-form>
      <c-form-item label="商品分类">
        <div class="c-form__input">{{ categoriesDetail.name }}</div>
      </c-form-item>
      <c-form-item label="商品英文名称">
        <c-form-input
          placeholder="请输入商品英文名称"
          v-model.trim="cForm.model.name"
          :error="cForm.errors.name"
          @blur="validate(cForm, 'name')"
        />
      </c-form-item>
      <c-form-item label="商品中文名称">
        <c-form-input
          placeholder="请输入商品中文名称"
          v-model.trim="cForm.model.cnName"
          :error="cForm.errors.cnName"
          @blur="validate(cForm, 'cnName')"
        />
      </c-form-item>
      <c-form-item label="商品图片">
        <div class="u-pt16" style="margin-left: 230rpx">
          <gc-upload
            :value="cForm.model.imageFileIds"
            @change="
              (value) => {
                cForm.model.imageFileIds = value;
                validate(cForm, 'imageFileIds');
              }
            "
          />
        </div>
        <div v-if="cForm.errors.imageFileIds" class="c-form__error">
          {{ cForm.errors.imageFileIds }}
        </div>
      </c-form-item>
      <c-form-item label="商品价格">
        <c-form-input
          type="number"
          placeholder="请输入商品价格"
          v-model.number="cForm.model.price"
          :error="cForm.errors.price"
          @blur="validate(cForm, 'price')"
        />
      </c-form-item>
      <c-form-item label="库存">
        <c-form-input
          type="number"
          placeholder="请输入库存"
          v-model.number="cForm.model.stock"
          :error="cForm.errors.stock"
          @blur="validate(cForm, 'stock')"
        />
      </c-form-item>
      <c-form-item label="销量">
        <c-form-input
          type="number"
          placeholder="请输入销量"
          v-model.number="cForm.model.sales"
          :error="cForm.errors.sales"
          @blur="validate(cForm, 'sales')"
        />
      </c-form-item>
      <c-form-item v-if="false" label="商品详情">
        <div class="u-pt10 u-pb10 u-mt70 u-ml20 u-mr20">
          <u-textarea placeholder="请输入商品详情" height="300" />
        </div>
      </c-form-item>
    </c-form>
    <u-button custom-class="at-bottom w702" type="primary" @click="submit">
      {{ cForm.model.id ? "修改" : "新增" }}
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
