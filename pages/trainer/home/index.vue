<template>
  <div class="p-trainer-home">
    <c-filter
      placeholder="选择课程"
      :range="cProducts.range"
      :array="cProducts.array"
      :value="cProducts.value"
      @change="handleProductChange">
    </c-filter>
    <ul
      v-if="studentsList.items.length"
      class="c-students">
      <li
        v-for="item in studentsList.items"
        :key="item.id"
        class="c-students__item"
        @click="showActions(item)">
        <div class="c-students__box bgc11 u-tac">
          <img
            class="c-students__avatar"
            :src="item.studentWxUser.avatarUrl"
          />
          <p class="c-students__name c12 fs32 u-fwb">{{ item.studentWxUser.name || item.studentWxUser.nickName }}</p>
          <p class="c-students__phone fs24 c31">{{ item.studentWxUser.phoneNumber }}</p>
        </div>
      </li>
    </ul>
    <c-empty v-if="!studentsList.items[0] && loaded"></c-empty>
    <c-actions
      :visible="cActions.visible"
      :options="cActions.options"
      @cancel="cActions.visible = false"
      @select="selectAction">
    </c-actions>
    <c-dialog
      :visible="cScore.visible"
      title="录入“赵金添”的成绩"
      @cancel="cScore.visible = false"
      @confirm="saveScore">
      <div slot="body">
        <input
          class="b-score__input bgc34 fs30 u-tac"
          placeholder="请输入成绩"
          v-model="cScore.form.value"
        />
      </div>
    </c-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
