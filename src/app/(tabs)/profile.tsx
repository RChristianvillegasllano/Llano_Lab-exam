import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="#111" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfoContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80' }}
              style={styles.profileAvatar}
            />
          </View>
          <Text style={styles.profileName}>Ronald Christian Llano</Text>
          <Text style={styles.profileSubtitle}>BSIT</Text>
        </View>

        {/* Metrics Section */}
        <View style={styles.metricsContainer}>
          <MetricCard title="Photos" value="128" />
          <MetricCard title="Followers" value="24.5K" />
          <MetricCard title="Following" value="1,240" />
        </View>

        {/* Memories */}
        <View style={styles.memoriesSection}>
          <Text style={styles.sectionTitle}>Memories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.memoriesContent}>
            <MemoryItem name="DB Tour" image="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=150&q=80" />
            <MemoryItem name="Nepal" image="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=150&q=80" />
            <MemoryItem name="Miami" image="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=150&q=80" />
            <MemoryItem name="Dubai" image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=150&q=80" />
            <MemoryItem name="More" image="https://images.unsplash.com/photo-1473260064287-17b5e4785de5?auto=format&fit=crop&w=150&q=80" />
          </ScrollView>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Shorts</Text>
          </TouchableOpacity>
        </View>

        {/* Photo Grid */}
        <View style={styles.photoGrid}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1506744626753-1fa44f4ac6e3?auto=format&fit=crop&w=400&q=80' }} style={styles.gridImage} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80' }} style={styles.gridImage} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&fit=crop&w=400&q=80' }} style={styles.gridImage} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' }} style={styles.gridImage} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80' }} style={styles.gridImage} />
          <Image source={{ uri: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&q=80' }} style={styles.gridImage} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function MemoryItem({ name, image }: { name: string, image: string }) {
  return (
    <View style={styles.memoryItem}>
      <View style={styles.memoryCircleWrapper}>
        <Image source={{ uri: image }} style={styles.memoryImage} />
      </View>
      <Text style={styles.memoryName}>{name}</Text>
    </View>
  );
}

function MetricCard({ title, value }: { title: string, value: string }) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 10,
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    marginBottom: 16,
  },
  profileAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  profileSubtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    fontWeight: '500',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginBottom: 30,
  },
  metricCard: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  metricTitle: {
    fontSize: 12,
    color: '#A0A0A0',
    marginTop: 4,
  },
  memoriesSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  memoriesContent: {
    paddingHorizontal: 20,
    gap: 20,
  },
  memoryItem: {
    alignItems: 'center',
    width: 64,
  },
  memoryCircleWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  memoryImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  memoryName: {
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#208AEF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A0A0A0',
  },
  activeTabText: {
    color: '#FFF',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    gap: 12,
  },
  gridImage: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
    marginBottom: 12,
  }
});
