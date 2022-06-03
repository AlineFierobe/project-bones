<script lang="ts">
export default {
  name: "SectionOverview",
  title: "Tableau de Bord",
};
</script>
<script setup lang="ts">
import BlockContainer from "@/components/block/ComponentBlockContainerInPage.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";

const text = `Mauris lacinia eros et urna tincidunt, vitae rhoncus mi facilisis. Suspendisse sit amet blandit justo. Vestibulum mattis ultrices ullamcorper. Duis ultricies dapibus diam quis pharetra. Vestibulum quis urna cursus, luctus ipsum sollicitudin, congue velit. Quisque vitae mollis erat. Curabitur egestas nunc arcu, et fermentum lectus viverra egestas. Maecenas bibendum augue vehicula bibendum varius. Sed posuere bibendum felis et mattis.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum nisl ligula, eget tempor magna molestie sit amet. Etiam tristique ligula velit, ac lacinia nibh fermentum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin placerat neque ut molestie. Ut convallis eros luctus condimentum consectetur. Phasellus tempor vulputate mauris id efficitur. Fusce in nisl quis magna dapibus convallis at non ante. Morbi pulvinar gravida dolor at ornare. Proin ligula tortor, scelerisque eget justo et, scelerisque fringilla leo. Cras sed elit scelerisque, egestas turpis in, faucibus massa. Nunc faucibus nibh sem, pharetra fermentum leo euismod et. Vivamus varius libero in sem faucibus tristique. Donec facilisis sed tellus sed porta. Integer placerat turpis et porttitor varius.

  Nam condimentum neque id varius eleifend. Nunc aliquet rhoncus risus, sit amet sodales orci maximus sed. Suspendisse molestie auctor libero, vel consequat nisl mattis congue. Proin vitae viverra odio. Etiam sodales vestibulum hendrerit. Donec facilisis velit nec mauris feugiat ultricies. Phasellus vel eros nec leo elementum lacinia. Phasellus tellus est, rhoncus id lorem ac, interdum ullamcorper lorem. Fusce convallis bibendum enim et imperdiet. Mauris nec sapien quis arcu convallis aliquam. Ut massa magna, pulvinar eu venenatis quis, suscipit et felis. Aenean tempus id nunc nec bibendum. Aenean metus purus, efficitur eu semper et, interdum sed orci. Aliquam cursus tortor in nulla pretium, vel pellentesque massa dictum.

  Fusce blandit hendrerit nibh, eget rhoncus velit tempor feugiat. Donec vehicula lacinia consequat. Phasellus at erat nisi. In in blandit eros, sed pellentesque justo. In volutpat turpis a eros dignissim aliquam. Nullam ac auctor leo. Etiam vitae magna varius, iaculis tellus eget, dapibus nisi. Etiam non turpis porta, faucibus sapien ut, lobortis elit. Pellentesque euismod convallis nisl ut volutpat. Vivamus non dolor lacinia, aliquet libero vitae, iaculis dolor.

  Duis consequat metus leo, ut commodo nisl lobortis sed. Praesent cursus risus ac malesuada interdum. Aliquam imperdiet blandit tempus. Maecenas libero lorem, bibendum vel diam nec, gravida venenatis lacus. Aliquam erat volutpat. Mauris rutrum, massa eu dictum condimentum, lacus diam hendrerit urna, sit amet euismod turpis nulla vel leo. Mauris vehicula turpis at sollicitudin ornare. Pellentesque id consectetur mi.

  Aliquam magna neque, laoreet a mollis id, tristique a ipsum. Sed cursus accumsan ultrices. Curabitur consequat purus tortor, sit amet porta nisi pellentesque quis. Maecenas in rhoncus nunc, quis fermentum augue. Curabitur convallis cursus nisl vitae rhoncus. Aenean libero mauris, hendrerit ut urna eget, lacinia pharetra risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum nisl ligula, eget tempor magna molestie sit amet. Etiam tristique ligula velit, ac lacinia nibh fermentum quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin placerat neque ut molestie. Ut convallis eros luctus condimentum consectetur. Phasellus tempor vulputate mauris id efficitur. Fusce in nisl quis magna dapibus convallis at non ante. Morbi pulvinar gravida dolor at ornare. Proin ligula tortor, scelerisque eget justo et, scelerisque fringilla leo. Cras sed elit scelerisque, egestas turpis in, faucibus massa. Nunc faucibus nibh sem, pharetra fermentum leo euismod et. Vivamus varius libero in sem faucibus tristique. Donec facilisis sed tellus sed porta. Integer placerat turpis et porttitor varius.

Nam condimentum neque id varius eleifend. Nunc aliquet rhoncus risus, sit amet sodales orci maximus sed. Suspendisse molestie auctor libero, vel consequat nisl mattis congue. Proin vitae viverra odio. Etiam sodales vestibulum hendrerit. Donec facilisis velit nec mauris feugiat ultricies. Phasellus vel eros nec leo elementum lacinia. Phasellus tellus est, rhoncus id lorem ac, interdum ullamcorper lorem. Fusce convallis bibendum enim et imperdiet. Mauris nec sapien quis arcu convallis aliquam. Ut massa magna, pulvinar eu venenatis quis, suscipit et felis. Aenean tempus id nunc nec bibendum. Aenean metus purus, efficitur eu semper et, interdum sed orci. Aliquam cursus tortor in nulla pretium, vel pellentesque massa dictum.

Fusce blandit hendrerit nibh, eget rhoncus velit tempor feugiat. Donec vehicula lacinia consequat. Phasellus at erat nisi. In in blandit eros, sed pellentesque justo. In volutpat turpis a eros dignissim aliquam. Nullam ac auctor leo. Etiam vitae magna varius, iaculis tellus eget, dapibus nisi. Etiam non turpis porta, faucibus sapien ut, lobortis elit. Pellentesque euismod convallis nisl ut volutpat. Vivamus non dolor lacinia, aliquet libero vitae, iaculis dolor.

Duis consequat metus leo, ut commodo nisl lobortis sed. Praesent cursus risus ac malesuada interdum. Aliquam imperdiet blandit tempus. Maecenas libero lorem, bibendum vel diam nec, gravida venenatis lacus. Aliquam erat volutpat. Mauris rutrum, massa eu dictum condimentum, lacus diam hendrerit urna, sit amet euismod turpis nulla vel leo. Mauris vehicula turpis at sollicitudin ornare. Pellentesque id consectetur mi.

Aliquam magna neque, laoreet a mollis id, tristique a ipsum. Sed cursus accumsan ultrices. Curabitur consequat purus tortor, sit amet porta nisi pellentesque quis. Maecenas in rhoncus nunc, quis fermentum augue. Curabitur convallis cursus nisl vitae rhoncus. Aenean libero mauris, hendrerit ut urna eget, lacinia pharetra risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Nam condimentum neque id varius eleifend. Nunc aliquet rhoncus risus, sit amet sodales orci maximus sed. Suspendisse molestie auctor libero, vel consequat nisl mattis congue. Proin vitae viverra odio. Etiam sodales vestibulum hendrerit. Donec facilisis velit nec mauris feugiat ultricies. Phasellus vel eros nec leo elementum lacinia. Phasellus tellus est, rhoncus id lorem ac, interdum ullamcorper lorem. Fusce convallis bibendum enim et imperdiet. Mauris nec sapien quis arcu convallis aliquam. Ut massa magna, pulvinar eu venenatis quis, suscipit et felis. Aenean tempus id nunc nec bibendum. Aenean metus purus, efficitur eu semper et, interdum sed orci. Aliquam cursus tortor in nulla pretium, vel pellentesque massa dictum.

Fusce blandit hendrerit nibh, eget rhoncus velit tempor feugiat. Donec vehicula lacinia consequat. Phasellus at erat nisi. In in blandit eros, sed pellentesque justo. In volutpat turpis a eros dignissim aliquam. Nullam ac auctor leo. Etiam vitae magna varius, iaculis tellus eget, dapibus nisi. Etiam non turpis porta, faucibus sapien ut, lobortis elit. Pellentesque euismod convallis nisl ut volutpat. Vivamus non dolor lacinia, aliquet libero vitae, iaculis dolor.

Duis consequat metus leo, ut commodo nisl lobortis sed. Praesent cursus risus ac malesuada interdum. Aliquam imperdiet blandit tempus. Maecenas libero lorem, bibendum vel diam nec, gravida venenatis lacus. Aliquam erat volutpat. Mauris rutrum, massa eu dictum condimentum, lacus diam hendrerit urna, sit amet euismod turpis nulla vel leo. Mauris vehicula turpis at sollicitudin ornare. Pellentesque id consectetur mi.

Aliquam magna neque, laoreet a mollis id, tristique a ipsum. Sed cursus accumsan ultrices. Curabitur consequat purus tortor, sit amet porta nisi pellentesque quis. Maecenas in rhoncus nunc, quis fermentum augue. Curabitur convallis cursus nisl vitae rhoncus. Aenean libero mauris, hendrerit ut urna eget, lacinia pharetra risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Nam condimentum neque id varius eleifend. Nunc aliquet rhoncus risus, sit amet sodales orci maximus sed. Suspendisse molestie auctor libero, vel consequat nisl mattis congue. Proin vitae viverra odio. Etiam sodales vestibulum hendrerit. Donec facilisis velit nec mauris feugiat ultricies. Phasellus vel eros nec leo elementum lacinia. Phasellus tellus est, rhoncus id lorem ac, interdum ullamcorper lorem. Fusce convallis bibendum enim et imperdiet. Mauris nec sapien quis arcu convallis aliquam. Ut massa magna, pulvinar eu venenatis quis, suscipit et felis. Aenean tempus id nunc nec bibendum. Aenean metus purus, efficitur eu semper et, interdum sed orci. Aliquam cursus tortor in nulla pretium, vel pellentesque massa dictum.

Fusce blandit hendrerit nibh, eget rhoncus velit tempor feugiat. Donec vehicula lacinia consequat. Phasellus at erat nisi. In in blandit eros, sed pellentesque justo. In volutpat turpis a eros dignissim aliquam. Nullam ac auctor leo. Etiam vitae magna varius, iaculis tellus eget, dapibus nisi. Etiam non turpis porta, faucibus sapien ut, lobortis elit. Pellentesque euismod convallis nisl ut volutpat. Vivamus non dolor lacinia, aliquet libero vitae, iaculis dolor.

Duis consequat metus leo, ut commodo nisl lobortis sed. Praesent cursus risus ac malesuada interdum. Aliquam imperdiet blandit tempus. Maecenas libero lorem, bibendum vel diam nec, gravida venenatis lacus. Aliquam erat volutpat. Mauris rutrum, massa eu dictum condimentum, lacus diam hendrerit urna, sit amet euismod turpis nulla vel leo. Mauris vehicula turpis at sollicitudin ornare. Pellentesque id consectetur mi.

Aliquam magna neque, laoreet a mollis id, tristique a ipsum. Sed cursus accumsan ultrices. Curabitur consequat purus tortor, sit amet porta nisi pellentesque quis. Maecenas in rhoncus nunc, quis fermentum augue. Curabitur convallis cursus nisl vitae rhoncus. Aenean libero mauris, hendrerit ut urna eget, lacinia pharetra risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`;
</script>

<template>
  <BlockContainer :is-section="false">
    <Typography :content="text" font-style="body1" />
  </BlockContainer>
</template>
