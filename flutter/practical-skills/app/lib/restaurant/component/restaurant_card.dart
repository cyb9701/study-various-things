import 'package:flutter/material.dart';
import 'package:practical_skills/common/const/colors.dart';
import 'package:practical_skills/restaurant/model/restaurant_detail_model.dart';
import 'package:practical_skills/restaurant/model/restaurant_model.dart';

class RastaurantCard extends StatelessWidget {
  final String? heroKey;
  final Widget image;
  final String name;
  final List<String> tags;
  final int ratingsCount;
  final int deliveryTime;
  final int deliveryFee;
  final double ratings;
  final bool isDetail;
  final String? detail;

  const RastaurantCard({
    super.key,
    this.heroKey,
    required this.image,
    required this.name,
    required this.tags,
    required this.ratingsCount,
    required this.deliveryTime,
    required this.deliveryFee,
    required this.ratings,
    this.isDetail = false,
    this.detail,
  });

  factory RastaurantCard.fromModel({
    required RestaurantModel model,
    bool isDetail = false,
  }) {
    return RastaurantCard(
      heroKey: model.id,
      image: Image.network(
        model.thumbUrl,
        fit: BoxFit.cover,
      ),
      name: model.name,
      tags: model.tags,
      ratingsCount: model.ratingsCount,
      deliveryTime: model.deliveryTime,
      deliveryFee: model.deliveryFee,
      ratings: model.ratings,
      isDetail: isDetail,
      detail: model is RestaurantDetailModel ? model.detail : null,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 16),
          child: heroKey != null
              ? Hero(
                  tag: ObjectKey(heroKey),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(isDetail ? 0 : 12),
                    child: image,
                  ),
                )
              : ClipRRect(
                  borderRadius: BorderRadius.circular(isDetail ? 0 : 12),
                  child: image,
                ),
        ),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: isDetail ? 16 : 0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                name,
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w500,
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: Text(
                  tags.join(' · '),
                  style: const TextStyle(
                    color: bodyTextColor,
                    fontSize: 14,
                  ),
                ),
              ),
              Row(
                children: [
                  _IconText(
                    icon: Icons.star,
                    label: ratings.toString(),
                  ),
                  const _RenderDot(),
                  _IconText(
                    icon: Icons.receipt,
                    label: ratingsCount.toString(),
                  ),
                  const _RenderDot(),
                  _IconText(
                    icon: Icons.timelapse_outlined,
                    label: '$deliveryTime분',
                  ),
                  const _RenderDot(),
                  _IconText(
                    icon: Icons.monetization_on,
                    label: deliveryFee == 0 ? '무료' : deliveryFee.toString(),
                  ),
                ],
              ),
              if (isDetail && detail != null)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  child: Text(
                    detail!,
                    style: const TextStyle(),
                  ),
                ),
            ],
          ),
        ),
      ],
    );
  }
}

class _IconText extends StatelessWidget {
  final IconData icon;
  final String label;

  const _IconText({
    required this.icon,
    required this.label,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Padding(
          padding: const EdgeInsets.only(right: 8),
          child: Icon(
            icon,
            color: primaryColor,
            size: 14,
          ),
        ),
        Text(
          label,
          style: const TextStyle(
            fontSize: 12,
            fontWeight: FontWeight.w500,
          ),
        ),
      ],
    );
  }
}

class _RenderDot extends StatelessWidget {
  const _RenderDot();

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.symmetric(
        horizontal: 4,
      ),
      child: Text(
        ' · ',
        style: TextStyle(
          fontSize: 12,
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }
}
