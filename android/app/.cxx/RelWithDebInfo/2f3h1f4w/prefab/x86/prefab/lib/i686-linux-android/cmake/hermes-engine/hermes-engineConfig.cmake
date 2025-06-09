if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/shubhamagrawal/.gradle/caches/8.10.2/transforms/04610a4b4f975f6b19302f2c82342d70/transformed/hermes-android-0.76.8-release/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/shubhamagrawal/.gradle/caches/8.10.2/transforms/04610a4b4f975f6b19302f2c82342d70/transformed/hermes-android-0.76.8-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

