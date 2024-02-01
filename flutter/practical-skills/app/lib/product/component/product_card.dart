import 'package:flutter/material.dart';
import 'package:practical_skills/common/const/colors.dart';

class ProductCard extends StatelessWidget {
  const ProductCard({super.key});

  @override
  Widget build(BuildContext context) {
    return IntrinsicHeight(
      child: Row(
        children: [
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(8),
              child: Image.asset(
                'assets/img/food/ddeok_bok_gi.jpg',
                width: 110,
                height: 110,
                fit: BoxFit.cover,
              ),
            ),
          ),
          const Expanded(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  '떡볶이',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                Text(
                  '전통 떡볶이의 정석!!\n맛있습니다 맛있습니다 맛있습니다 맛있습니다 맛있습니다',
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    color: bodyTextColor,
                    fontSize: 14,
                  ),
                ),
                Text(
                  '100,000원',
                  textAlign: TextAlign.right,
                  style: TextStyle(
                    color: primaryColor,
                    fontSize: 12,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
