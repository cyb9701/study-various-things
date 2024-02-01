import 'package:flutter/material.dart';
import 'package:practical_skills/common/const/colors.dart';

import '../layout/default_layout.dart';

class RootTab extends StatefulWidget {
  const RootTab({super.key});

  @override
  State<RootTab> createState() => _RootTabState();
}

class _RootTabState extends State<RootTab> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  void _tabListener() {
    setState(() {});
  }

  @override
  void initState() {
    _tabController = TabController(length: 4, vsync: this)..addListener(_tabListener);
    super.initState();
  }

  @override
  void dispose() {
    _tabController
      ..removeListener(_tabListener)
      ..dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return DefaultLayout(
      title: '배달의 민족',
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: primaryColor,
        unselectedItemColor: bodyTextColor,
        selectedFontSize: 10,
        unselectedFontSize: 10,
        type: BottomNavigationBarType.fixed,
        onTap: (int index) {
          _tabController.animateTo(index);
        },
        currentIndex: _tabController.index,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(
              Icons.home_outlined,
            ),
            label: '홈',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.fastfood_outlined,
            ),
            label: '음식',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.receipt_long_outlined,
            ),
            label: '주문',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.person_outline,
            ),
            label: '프로필',
          ),
        ],
      ),
      child: TabBarView(
        controller: _tabController,
        physics: const NeverScrollableScrollPhysics(),
        children: const [
          Text(
            '1',
          ),
          Text(
            '2',
          ),
          Text(
            '3',
          ),
          Text(
            '4',
          ),
        ],
      ),
    );
  }
}
